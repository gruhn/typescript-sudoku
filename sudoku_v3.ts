
type False = never

type True = unknown

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

enum Num1 { x }
enum Num2 { x }
enum Num3 { x }
enum Num4 { x }
enum Num5 { x }
enum Num6 { x }
enum Num7 { x }
enum Num8 { x }
enum Num9 { x }

enum Hole { hole }

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

type Sudoku<
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
>(_: Sudoku<
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

  __, __, __, __, __, __, __, __, __,
  __, __, __, __, __, __, __, __, __,
  __, __, __, __, __, __, __, __, __,
])
