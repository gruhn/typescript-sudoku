# TypeScript Sudoku

This is an experiment to define a `Sudoku` type.
The goal is that we can play sudoku in TypeScript while the type checker complains if make a mistake.
We won't implement a sudoku solver.
This is purely an exercise in writing type definitions.

![demo video: final approach](./sudoku_v2_demo.gif)

As a first approximation we can define the type as an array of numbers:

```typescript
type Sudoku = number[]
```

This permits all valid sudokus, but also allows many *invalid* sudokus.

```typescript
const invalidSudoku: Sudoku = [ -1, 7.5, 9, 9 ] // type checks!
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
Currently, this still type-checks:

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

Now, to ensure that all cells are different, 
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

A downside is that the full type definition is very large (see [sudoku_v1.ts](sudoku_v1.ts)).
For each cell we have to explicitly list the other cells that are required to be different.
Writing that out manually is tedious.
I ended up writing a script to just to print out the type definition (see [generate_sudoku_v1.ts](generate_sudoku_v1.ts)).
