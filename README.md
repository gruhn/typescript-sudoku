# TypeScript Sudoku

This is an experiment to define a `Sudoku` type.
The goal is that we can play sudoku in TypeScript while the type checker complains if we make a mistake.
We are not implementing a sudoku solver.
This is purely an exercise in writing type definitions.

![demo video: final approach](./sudoku_v2_demo.gif)

As a first approximation we can define the type as an array of numbers:

```typescript
type Sudoku = number[]
```

This permits all valid sudokus, but also allows many *invalid* sudokus.

```typescript
const invalidSudoku: Sudoku = [ -1, 7.5, 9, 9 ]
```
First, all array elements have to be integers in the range 1 to 9.
Second, sudokus are 9-by-9 grids so we need an array with exactly 81 elements.
That's easy enough:

```typescript
type Cell = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

type Sudoku = [
  Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell,
  Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell,
  Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell,
  Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell,
  Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell,
  Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell,
  Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell,
  Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell,
  Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell,
]
```
But the interesting part is: how do we enforce the sudoku rules?
Currently, this still type checks:

```typescript
const invalidSudoku: Sudoku = [
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1,
]
```

We have to make sure that

 * all rows are duplicate free, 
 * all columns are duplicate free and
 * each of the 3-by-3 squares is also duplicate free.

For simplicity, let's just consider a 3-cell sudoku for now:

```typescript
type BabySudoku = [ Cell, Cell, Cell ]
```
How can we require that the three cells all have different values?
The definition of a cell is dependent on other cells, 
so we need a way to reference individual cells.
By introducing a type parameter for every cell,
we can refer to cells by name:

```typescript
type BabySudoku<
  X1 extends Cell,
  X2 extends Cell,
  X3 extends Cell
> = [ X1, X2, X3 ]
```

Guess how many parameters the full 9-by-9 sudoku needs.

A problem is that we have to provide these type parameters now when we create `BabySudoku` values:

```typescript
const s: BabySudoku<1, 2, 3> = [ 1, 2, 3 ]
```

This is redundant.
The type parameters should get inferred from the value.
Type parameters on functions are automatically inferred:

```typescript
const func = <T>(val: T) => val

func<string>("hello") // type parameter can be provided ...
func("hello")         // ... but not necessary
```

So as a workaround we can put the type definition of `BabySudoku` into the argument of an arrow function:

```typescript
const babySudoku = <
  X1 extends Cell, 
  X2 extends Cell, 
  X3 extends Cell
>(cells: [ X1, X2, X3 ]) => cells
```

With that we can construct sudokus, 
without instantiating type parameters explicitly:

```typescript
const s = babySudoku([1, 2, 3])
```

The runtime behavior of `babySudoku` is boring.
It just returns it's argument unchanged (aka. the identity function).
This is a bit awkward but so far I haven't found a better alternative.

## Constraints using `Exclude`

We still need to ensure that all cells are different, 
we can use the built-in utility type [`Exclude`](https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers).

```typescript
const babySudoku = <
  X1 extends Cell, 
  X2 extends Cell, 
  X3 extends Cell
>(
  cells: [ 
    Exclude<X1, X2 | X3>, 
    Exclude<X2, X1 | X3>, 
    Exclude<X3, X1 | X2>, 
  ]
) => cells
```

This works! 
What's particularly nice about this approach is that the type checker highlights exactly the cells that are in conflict:

![demo: first approach](./sudoku_v1_demo.png)

A downside is that the [full type definition](sudoku_v1.ts) is very large.
For each cell we have to explicitly list the other cells that are required to be different.
Writing that out manually is tedious.
I ended up [creating a script](generate_sudoku_v1.ts) just to print out the type definition.

I came up with another approach that has more compact type definitions. 
Before we can talk about that we need to talk about the types `unknown` and `never`.

## Interlude: `unknown` and `never`

`never` is the empty type, which makes it a sub-type of everything.
There is no value that has type `never`. 
So you always get a type error no matter what you write on the right-hand side of `const value: never = ???`.
That is, unless the assignment is unreachable or you use some malicous type cast: 
```typescript
const value: never = "obviously not never" as never
```
`never` is useful to strategically provoke a type error.
The plan is to formulate the sudoku type in such a way, 
that it is equal to `never` IF constraints are violated.

`unknown` is a super-type of everything similar, to `any` ([What's the difference between `unknown` and `any`?](https://stackoverflow.com/a/51439876)). 

<img alt="type hierarchie" src="./type-hierarchie.png" height="300px" />

I find it useful to think of `unknown` and `never` as type-level analogs of `true` and `false`.
Because in combination with union types (`A | B`) and intersection types (`A & B`), 
`unknown` and `never` behave just like boolean OR (`a || b`) and boolean AND (`a && b`).
Notice the syntactic similarity of these operators.
For example, `unknown | never` is `unknown`, i.e. building the union of *absolutely-everything* and *absolutely-nothing* gives *absolutely-everything*.
Analogously, `true || false` is `true`.

Let's define type aliases, to make the relationship more obvious:
```typescript
type True = unknown
type False = never
```
With that we have:

| Term-level                    | Type-level                  | 
| ----------------------------- | --------------------------- |
| `true && true` is `true`      | `True & True` is `True`     |
| `true && false` is `false`    | `True & False` is `False`   |
| `true \|\| false` is `true`   | `True \| False` is `True`   |
| `false \|\| false` is `false` | `False \| False` is `False` |
| ...                           | ...                         |

Now that we can talk about booleans on the type-level, 
we can formulate arbitrary boolean constraints inside type definitions.

## Constraints using Type-Level Predicates

The plan is come of with some type-level boolean expression that describes the (baby-)sudoku constraints:
```typescript
type CheckSudokuConstraints<X1, X2, X3> = ??? // "returns" either `unknown` or `never`
```
At this point we can think of `CheckSudokuConstraints` as a function that returns `true` or `false` (aka. a predicate).
The analogous term-level function would look like this:
```typescript
function checkSudokuRules(x1: Cell, x2: Cell, x3: Cell): boolean {
   return ???
}
```

Once we know how to define `CheckSudokuConstraints` we build the intersection with the actual number grid:
```typescript
[ X1, X2, X3 ] & CheckSudokuConstraints<X1, X2, X3>
```
IF some sudoku constraint is violated, then `CheckSudokuConstraints<X1, X2, X3>` "returns" `never` and we get:

```typescript
[ X1, X2, X3 ] & never             // ==> never
```

The intersection with the empty type is always the empty type, 
so the whole definition "collapses" down to `never`.

<img alt="Venn diagram: never intersection" src="intersect_never.png" height="250px" />

IF all sudoku constraint are satisfied, 
then `CheckSudokuConstraints<X1, X2, X3>` "returns" `unknown` and we get:

```typescript
[ X1, X2, X3 ] & unknown          // ==> [ X1, X2, X3 ]
```

The intersection with `unknown` just leaves the number grid alone.

<img alt="Venn diagram: unknown intersection" src="intersect_unknown.png" height="250px" />

## Conclusion

This is not really useful.
One could try to use this to implement a statically verified sudoku solver: 

```typescript
function solveSudoku(grid: IncompleteSudoku): CompleteSudoku { /* ... */ }
```

This would give very high confidence in the implementations correctness.
However, it's probably hard to convince the type checker that the code really matches the spec.
Even then, the error messages are not very friendly
> Argument of type 'number[]' is not assignable to parameter of type 'never'
and, depending on the TypeScript version, it can take multiple seconds to type check the code.

On the other hand, I believe most people have the impression that types can only talk about the superficial structure of data.
I find it interesting to see how much expressivity we can squeeze out of the type system.
