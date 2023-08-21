
type True = unknown

type False = never

// type Implies<X, Y> = (_: X) => Y

// type Not<X> = Implies<X, False>

// type Equals<X, Y> = X extends Y ? (Y extends X ? True : False) : False

type Different<X, Y> = X extends Y ? (Y extends X ? False : True) : True

/////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////

enum Num1 { x = 1 }
enum Num2 { x = 2 }
enum Num3 { x = 3 }
enum Num4 { x = 4 }
enum Num5 { x = 5 }
enum Num6 { x = 6 }
enum Num7 { x = 7 }
enum Num8 { x = 8 }
enum Num9 { x = 9 }

enum Hole { hole = 0 }

const _1 = Num1.x
const _2 = Num2.x
const _3 = Num3.x
const _4 = Num4.x
const _5 = Num5.x
const _6 = Num6.x
const _7 = Num7.x
const _8 = Num8.x
const _9 = Num9.x
const __ = Hole.hole

type Cell = Num1 | Num2 | Num3 | Num4 | Num5 | Num6 | Num7 | Num8 | Num9

type Sudoku_<
  State,

  X11, X12, X13, X14, X15, X16, X17, X18, X19,
  X21, X22, X23, X24, X25, X26, X27, X28, X29,
  X31, X32, X33, X34, X35, X36, X37, X38, X39,
  X41, X42, X43, X44, X45, X46, X47, X48, X49,
  X51, X52, X53, X54, X55, X56, X57, X58, X59,
  X61, X62, X63, X64, X65, X66, X67, X68, X69,
  X71, X72, X73, X74, X75, X76, X77, X78, X79,
  X81, X82, X83, X84, X85, X86, X87, X88, X89,
  X91, X92, X93, X94, X95, X96, X97, X98, X99,
> =
  [
    X11 | State, X12 | State, X13 | State, X14 | State, X15 | State, X16 | State, X17 | State, X18 | State, X19 | State,
    X21 | State, X22 | State, X23 | State, X24 | State, X25 | State, X26 | State, X27 | State, X28 | State, X29 | State,
    X31 | State, X32 | State, X33 | State, X34 | State, X35 | State, X36 | State, X37 | State, X38 | State, X39 | State,
    X41 | State, X42 | State, X43 | State, X44 | State, X45 | State, X46 | State, X47 | State, X48 | State, X49 | State,
    X51 | State, X52 | State, X53 | State, X54 | State, X55 | State, X56 | State, X57 | State, X58 | State, X59 | State,
    X61 | State, X62 | State, X63 | State, X64 | State, X65 | State, X66 | State, X67 | State, X68 | State, X69 | State,
    X71 | State, X72 | State, X73 | State, X74 | State, X75 | State, X76 | State, X77 | State, X78 | State, X79 | State,
    X81 | State, X82 | State, X83 | State, X84 | State, X85 | State, X86 | State, X87 | State, X88 | State, X89 | State,
    X91 | State, X92 | State, X93 | State, X94 | State, X95 | State, X96 | State, X97 | State, X98 | State, X99 | State,
  ]

  // rows
  & AllDifferent<X11, X12, X13, X14, X15, X16, X17, X18, X19>
  & AllDifferent<X21, X22, X23, X24, X25, X26, X27, X28, X29>
  & AllDifferent<X31, X32, X33, X34, X35, X36, X37, X38, X39>
  & AllDifferent<X41, X42, X43, X44, X45, X46, X47, X48, X49>
  & AllDifferent<X51, X52, X53, X54, X55, X56, X57, X58, X59>
  & AllDifferent<X61, X62, X63, X64, X65, X66, X67, X68, X69>
  & AllDifferent<X71, X72, X73, X74, X75, X76, X77, X78, X79>
  & AllDifferent<X81, X82, X83, X84, X85, X86, X87, X88, X89>
  & AllDifferent<X91, X92, X93, X94, X95, X96, X97, X98, X99>

  // columns
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

type Sudoku<State> = <
  X11 extends Cell, X12 extends Cell, X13 extends Cell, X14 extends Cell, X15 extends Cell, X16 extends Cell, X17 extends Cell, X18 extends Cell, X19 extends Cell,
  X21 extends Cell, X22 extends Cell, X23 extends Cell, X24 extends Cell, X25 extends Cell, X26 extends Cell, X27 extends Cell, X28 extends Cell, X29 extends Cell,
  X31 extends Cell, X32 extends Cell, X33 extends Cell, X34 extends Cell, X35 extends Cell, X36 extends Cell, X37 extends Cell, X38 extends Cell, X39 extends Cell,
  X41 extends Cell, X42 extends Cell, X43 extends Cell, X44 extends Cell, X45 extends Cell, X46 extends Cell, X47 extends Cell, X48 extends Cell, X49 extends Cell,
  X51 extends Cell, X52 extends Cell, X53 extends Cell, X54 extends Cell, X55 extends Cell, X56 extends Cell, X57 extends Cell, X58 extends Cell, X59 extends Cell,
  X61 extends Cell, X62 extends Cell, X63 extends Cell, X64 extends Cell, X65 extends Cell, X66 extends Cell, X67 extends Cell, X68 extends Cell, X69 extends Cell,
  X71 extends Cell, X72 extends Cell, X73 extends Cell, X74 extends Cell, X75 extends Cell, X76 extends Cell, X77 extends Cell, X78 extends Cell, X79 extends Cell,
  X81 extends Cell, X82 extends Cell, X83 extends Cell, X84 extends Cell, X85 extends Cell, X86 extends Cell, X87 extends Cell, X88 extends Cell, X89 extends Cell,
  X91 extends Cell, X92 extends Cell, X93 extends Cell, X94 extends Cell, X95 extends Cell, X96 extends Cell, X97 extends Cell, X98 extends Cell, X99 extends Cell,
>() => Sudoku_<State,
  X11, X12, X13, X14, X15, X16, X17, X18, X19,
  X21, X22, X23, X24, X25, X26, X27, X28, X29,
  X31, X32, X33, X34, X35, X36, X37, X38, X39,
  X41, X42, X43, X44, X45, X46, X47, X48, X49,
  X51, X52, X53, X54, X55, X56, X57, X58, X59,
  X61, X62, X63, X64, X65, X66, X67, X68, X69,
  X71, X72, X73, X74, X75, X76, X77, X78, X79,
  X81, X82, X83, X84, X85, X86, X87, X88, X89,
  X91, X92, X93, X94, X95, X96, X97, X98, X99
> 

type Solved = never

type Unsolved = Hole

export const sudoku = <
  X11 extends Cell, X12 extends Cell, X13 extends Cell, X14 extends Cell, X15 extends Cell, X16 extends Cell, X17 extends Cell, X18 extends Cell, X19 extends Cell,
  X21 extends Cell, X22 extends Cell, X23 extends Cell, X24 extends Cell, X25 extends Cell, X26 extends Cell, X27 extends Cell, X28 extends Cell, X29 extends Cell,
  X31 extends Cell, X32 extends Cell, X33 extends Cell, X34 extends Cell, X35 extends Cell, X36 extends Cell, X37 extends Cell, X38 extends Cell, X39 extends Cell,
  X41 extends Cell, X42 extends Cell, X43 extends Cell, X44 extends Cell, X45 extends Cell, X46 extends Cell, X47 extends Cell, X48 extends Cell, X49 extends Cell,
  X51 extends Cell, X52 extends Cell, X53 extends Cell, X54 extends Cell, X55 extends Cell, X56 extends Cell, X57 extends Cell, X58 extends Cell, X59 extends Cell,
  X61 extends Cell, X62 extends Cell, X63 extends Cell, X64 extends Cell, X65 extends Cell, X66 extends Cell, X67 extends Cell, X68 extends Cell, X69 extends Cell,
  X71 extends Cell, X72 extends Cell, X73 extends Cell, X74 extends Cell, X75 extends Cell, X76 extends Cell, X77 extends Cell, X78 extends Cell, X79 extends Cell,
  X81 extends Cell, X82 extends Cell, X83 extends Cell, X84 extends Cell, X85 extends Cell, X86 extends Cell, X87 extends Cell, X88 extends Cell, X89 extends Cell,
  X91 extends Cell, X92 extends Cell, X93 extends Cell, X94 extends Cell, X95 extends Cell, X96 extends Cell, X97 extends Cell, X98 extends Cell, X99 extends Cell,
>(_: Sudoku_<
  Unsolved,

  X11, X12, X13, X14, X15, X16, X17, X18, X19,
  X21, X22, X23, X24, X25, X26, X27, X28, X29,
  X31, X32, X33, X34, X35, X36, X37, X38, X39,
  X41, X42, X43, X44, X45, X46, X47, X48, X49,
  X51, X52, X53, X54, X55, X56, X57, X58, X59,
  X61, X62, X63, X64, X65, X66, X67, X68, X69,
  X71, X72, X73, X74, X75, X76, X77, X78, X79,
  X81, X82, X83, X84, X85, X86, X87, X88, X89,
  X91, X92, X93, X94, X95, X96, X97, X98, X99
>) => { }

/////////////////////////////////////////////////////

sudoku([
  _7, _9, _2,  _3, _5, _4,  _6, _1, _8,
  _8, _5, _4,  _1, _2, _6,  _3, _9, _7,
  _3, _6, _1,  _9, _8, _7,  _5, _2, _4,

  _9, _4, _5,  _6, _3, _8,  _1, _7, _2,
  _2, _7, _8,  _5, _4, _1,  _9, _3, _6,
  _6, _1, _3,  _7, _9, _2,  _8, _4, _5,

  _4, _2, _9,  _8, _1, _5,  _7, _6, _3,
  _1, _8, _7,  _2, _6, _3,  _4, _5, _9,
  _5, _3, _6,  _4, _7, _9,  _2, _8, _1,
])

sudoku([
  _1, _9, _8, _2, _3, _4, _7, __, __,
  __, _5, __, _7, _9, __, __, __, __,
  __, _3, _4, __, __, __, __, __, __,

  _3, _1, _6, __, __, __, __, __, __,
  __, _4, __, __, __, __, __, __, __,
  __, _2, _7, __, __, __, __, __, __,

  __, __, __, __, __, __, __, __, _1,
  __, __, __, __, __, __, __, __, __,
  __, __, __, __, __, __, __, __, __,
]);

