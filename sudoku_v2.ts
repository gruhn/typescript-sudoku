
type True = unknown

type False = never

type Different<X, Y> = X extends Y ? (Y extends X ? False : True) : True

type AllDifferent<
  X1, X2, X3,
  X4, X5, X6,
  X7, X8, X9
> = Different<X1, X2> & Different<X1, X3> & Different<X1, X3>
  & Different<X1, X4> & Different<X1, X5> & Different<X1, X6>
  & Different<X1, X7> & Different<X1, X8> & Different<X1, X9>

  & Different<X2, X3> & Different<X2, X4> & Different<X2, X5>
  & Different<X2, X6> & Different<X2, X7> & Different<X2, X8>
  & Different<X2, X9>

  & Different<X3, X4> & Different<X3, X5> & Different<X3, X6>
  & Different<X3, X7> & Different<X3, X8> & Different<X3, X9>

  & Different<X4, X5> & Different<X4, X6> & Different<X4, X7>
  & Different<X4, X8> & Different<X4, X9>

  & Different<X5, X6> & Different<X5, X7> & Different<X5, X8>
  & Different<X5, X9>

  & Different<X6, X7> & Different<X6, X8> & Different<X6, X9>

  & Different<X7, X8> & Different<X7, X9>

  & Different<X8, X9>

const _ = Symbol('hole')

type Hole = typeof _

type Cell = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export const sudoku = <
  const X11 extends Cell, const X12 extends Cell, const X13 extends Cell, 
  const X14 extends Cell, const X15 extends Cell, const X16 extends Cell, 
  const X17 extends Cell, const X18 extends Cell, const X19 extends Cell,
  const X21 extends Cell, const X22 extends Cell, const X23 extends Cell, 
  const X24 extends Cell, const X25 extends Cell, const X26 extends Cell, 
  const X27 extends Cell, const X28 extends Cell, const X29 extends Cell,
  const X31 extends Cell, const X32 extends Cell, const X33 extends Cell, 
  const X34 extends Cell, const X35 extends Cell, const X36 extends Cell, 
  const X37 extends Cell, const X38 extends Cell, const X39 extends Cell,
  const X41 extends Cell, const X42 extends Cell, const X43 extends Cell, 
  const X44 extends Cell, const X45 extends Cell, const X46 extends Cell, 
  const X47 extends Cell, const X48 extends Cell, const X49 extends Cell,
  const X51 extends Cell, const X52 extends Cell, const X53 extends Cell, 
  const X54 extends Cell, const X55 extends Cell, const X56 extends Cell, 
  const X57 extends Cell, const X58 extends Cell, const X59 extends Cell,
  const X61 extends Cell, const X62 extends Cell, const X63 extends Cell, 
  const X64 extends Cell, const X65 extends Cell, const X66 extends Cell, 
  const X67 extends Cell, const X68 extends Cell, const X69 extends Cell,
  const X71 extends Cell, const X72 extends Cell, const X73 extends Cell, 
  const X74 extends Cell, const X75 extends Cell, const X76 extends Cell, 
  const X77 extends Cell, const X78 extends Cell, const X79 extends Cell,
  const X81 extends Cell, const X82 extends Cell, const X83 extends Cell, 
  const X84 extends Cell, const X85 extends Cell, const X86 extends Cell, 
  const X87 extends Cell, const X88 extends Cell, const X89 extends Cell,
  const X91 extends Cell, const X92 extends Cell, const X93 extends Cell, 
  const X94 extends Cell, const X95 extends Cell, const X96 extends Cell, 
  const X97 extends Cell, const X98 extends Cell, const X99 extends Cell,
>(grid:
  [
    X11 | Hole, X12 | Hole, X13 | Hole, X14 | Hole, X15 | Hole, X16 | Hole, X17 | Hole, X18 | Hole, X19 | Hole,
    X21 | Hole, X22 | Hole, X23 | Hole, X24 | Hole, X25 | Hole, X26 | Hole, X27 | Hole, X28 | Hole, X29 | Hole,
    X31 | Hole, X32 | Hole, X33 | Hole, X34 | Hole, X35 | Hole, X36 | Hole, X37 | Hole, X38 | Hole, X39 | Hole,
    X41 | Hole, X42 | Hole, X43 | Hole, X44 | Hole, X45 | Hole, X46 | Hole, X47 | Hole, X48 | Hole, X49 | Hole,
    X51 | Hole, X52 | Hole, X53 | Hole, X54 | Hole, X55 | Hole, X56 | Hole, X57 | Hole, X58 | Hole, X59 | Hole,
    X61 | Hole, X62 | Hole, X63 | Hole, X64 | Hole, X65 | Hole, X66 | Hole, X67 | Hole, X68 | Hole, X69 | Hole,
    X71 | Hole, X72 | Hole, X73 | Hole, X74 | Hole, X75 | Hole, X76 | Hole, X77 | Hole, X78 | Hole, X79 | Hole,
    X81 | Hole, X82 | Hole, X83 | Hole, X84 | Hole, X85 | Hole, X86 | Hole, X87 | Hole, X88 | Hole, X89 | Hole,
    X91 | Hole, X92 | Hole, X93 | Hole, X94 | Hole, X95 | Hole, X96 | Hole, X97 | Hole, X98 | Hole, X99 | Hole,
  ]

  // all 9 rows
  & AllDifferent<X11, X12, X13, X14, X15, X16, X17, X18, X19>
  & AllDifferent<X21, X22, X23, X24, X25, X26, X27, X28, X29>
  & AllDifferent<X31, X32, X33, X34, X35, X36, X37, X38, X39>
  & AllDifferent<X41, X42, X43, X44, X45, X46, X47, X48, X49>
  & AllDifferent<X51, X52, X53, X54, X55, X56, X57, X58, X59>
  & AllDifferent<X61, X62, X63, X64, X65, X66, X67, X68, X69>
  & AllDifferent<X71, X72, X73, X74, X75, X76, X77, X78, X79>
  & AllDifferent<X81, X82, X83, X84, X85, X86, X87, X88, X89>
  & AllDifferent<X91, X92, X93, X94, X95, X96, X97, X98, X99>

  // all 9 columns
  & AllDifferent<X11, X21, X31, X41, X51, X61, X71, X81, X91>
  & AllDifferent<X12, X22, X32, X42, X52, X62, X72, X82, X92>
  & AllDifferent<X13, X23, X33, X43, X53, X63, X73, X83, X93>
  & AllDifferent<X14, X24, X34, X44, X54, X64, X74, X84, X94>
  & AllDifferent<X15, X25, X35, X45, X55, X65, X75, X85, X95>
  & AllDifferent<X16, X26, X36, X46, X56, X66, X76, X86, X96>
  & AllDifferent<X17, X27, X37, X47, X57, X67, X77, X87, X97>
  & AllDifferent<X18, X28, X38, X48, X58, X68, X78, X88, X98>
  & AllDifferent<X19, X29, X39, X49, X59, X69, X79, X89, X99>

  // three upper squares
  & AllDifferent<X11, X12, X13, X21, X22, X23, X31, X32, X33>
  & AllDifferent<X14, X15, X16, X24, X25, X26, X34, X35, X36>
  & AllDifferent<X17, X18, X19, X27, X28, X29, X37, X38, X39>

  // three center squares
  & AllDifferent<X41, X42, X43, X51, X52, X53, X61, X62, X63>
  & AllDifferent<X44, X45, X46, X54, X55, X56, X64, X65, X66>
  & AllDifferent<X47, X48, X49, X57, X58, X59, X67, X68, X69>

  // three lower squares
  & AllDifferent<X71, X72, X73, X81, X82, X83, X91, X92, X93>
  & AllDifferent<X74, X75, X76, X84, X85, X86, X94, X95, X96>
  & AllDifferent<X77, X78, X79, X87, X88, X89, X97, X98, X99>
) => grid

///////////// EXAMPLE SUDOKUS //////////////////

// complete valid sudoku
sudoku([
  7, 9, 2,  3, 5, 4,  6, 1, 8,
  8, 5, 4,  1, 2, 6,  3, 9, 7,
  3, 6, 1,  9, 8, 7,  5, 2, 4,

  9, 4, 5,  6, 3, 8,  1, 7, 2,
  2, 7, 8,  5, 4, 1,  9, 3, 6,
  6, 1, 3,  7, 9, 2,  8, 4, 5,

  4, 2, 9,  8, 1, 5,  7, 6, 3,
  1, 8, 7,  2, 6, 3,  4, 5, 9,
  5, 3, 6,  4, 7, 9,  2, 8, 1,
])

// incomplete valid sudoku
sudoku([
  _, 3, _,  _, _, _,  _, _, _,
  _, _, _,  1, 9, 5,  _, _, _,
  _, _, 8,  _, _, _,  _, 6, _,

  8, _, _,  _, 6, _,  _, _, _,
  4, _, _,  8, _, _,  _, _, 1,
  _, _, _,  _, 2, _,  _, _, _,

  _, 6, _,  _, _, _,  2, 8, _,
  _, _, _,  4, 1, 9,  _, _, 5,
  _, _, _,  _, _, _,  _, 7, _,
])


type BabySudoku<
  X1 extends Cell,
  X2 extends Cell,
  X3 extends Cell
> = [ 
  Exclude<X1, X2 | X3>, 
  Exclude<X2, X1 | X3>, 
  Exclude<X3, X1 | X2>, 
]

const babySudoku: BabySudoku<1, 2, 3> = [ 1, 2, 3 ]
