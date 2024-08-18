# TypeScript Sudoku

This is an experiment to define a `Sudoku` type.
The goal is that we can play sudoku in TypeScript while the type checker complains if make a mistake.
We won't implement a sudoku solver.
This is purely an exercise in writing type definitions.

![demo video: final approach](./sudoku-v2-demo.gif)

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
In the definition of the cells we somehow need to *refer* to the other cells.
By introducing a type parameter for every cell, 
we have a name that we can refer to multiple times:

```typescript
type BabySudoku<
  X1 extends Cell,
  X2 extends Cell,
  X3 extends Cell
> = [ X1, X2, X3 ]
```

TODO...

What's nice about this approach is that the type checker highlights exactly the cells that are in conflict:

![demo: first approach](./sudoku_v1_demo.png)

A downside is that the full type definition is very large (see [sudoku-v1.ts](sudoku-v1.ts)).
Writing it out manually is tedious and error prone, 
so I actually wrote a script to print the type definition (see [generate-sudoku-v1.ts](generate-sudoku-v1.ts)).
