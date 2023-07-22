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

type Implies<X, Y> = (_: X) => Y

type False = never

type Not<X> = Implies<X, False>

type True = Not<False>

type Equals<X, Y> = X extends Y ? (Y extends X ? True : False) : False

function absurd<X>(x: never): X {
  return x
}

type PairwiseDifferent<
  X1, X2, X3,
  X4, X5, X6,
  X7, X8, X9
> = Not<Equals<X1, X2>>
  & Not<Equals<X1, X3>>
  & Not<Equals<X1, X3>>
  & Not<Equals<X1, X4>>
  & Not<Equals<X1, X5>>
  & Not<Equals<X1, X6>>
  & Not<Equals<X1, X7>>
  & Not<Equals<X1, X8>>
  & Not<Equals<X1, X9>>

  & Not<Equals<X2, X3>>
  & Not<Equals<X2, X4>>
  & Not<Equals<X2, X5>>
  & Not<Equals<X2, X6>>
  & Not<Equals<X2, X7>>
  & Not<Equals<X2, X8>>
  & Not<Equals<X2, X9>>

  & Not<Equals<X3, X4>>
  & Not<Equals<X3, X5>>
  & Not<Equals<X3, X6>>
  & Not<Equals<X3, X7>>
  & Not<Equals<X3, X8>>
  & Not<Equals<X3, X9>>

  & Not<Equals<X4, X5>>
  & Not<Equals<X4, X6>>
  & Not<Equals<X4, X7>>
  & Not<Equals<X4, X8>>
  & Not<Equals<X4, X9>>

  & Not<Equals<X5, X6>>
  & Not<Equals<X5, X7>>
  & Not<Equals<X5, X8>>
  & Not<Equals<X5, X9>>

  & Not<Equals<X6, X7>>
  & Not<Equals<X6, X8>>
  & Not<Equals<X6, X9>>

  & Not<Equals<X7, X8>>
  & Not<Equals<X7, X9>>

  & Not<Equals<X8, X9>>

type Sudoku_<
  X11, X12, X13, X14, X15, X16, X17, X18, X19,
  X21, X22, X23, X24, X25, X26, X27, X28, X29,
  X31, X32, X33, X34, X35, X36, X37, X38, X39,

  X41, X42, X43, X44, X45, X46, X47, X48, X49,
  X51, X52, X53, X54, X55, X56, X57, X58, X59,
  X61, X62, X63, X64, X65, X66, X67, X68, X69,

  X71, X72, X73, X74, X75, X76, X77, X78, X79,
  X81, X82, X83, X84, X85, X86, X87, X88, X89,
  X91, X92, X93, X94, X95, X96, X97, X98, X99,
> = [
    // rows
    PairwiseDifferent<X11, X12, X13, X14, X15, X16, X17, X18, X19>
    & PairwiseDifferent<X21, X22, X23, X24, X25, X26, X27, X28, X29>
    & PairwiseDifferent<X31, X32, X33, X34, X35, X36, X37, X38, X39>
    & PairwiseDifferent<X41, X42, X43, X44, X45, X46, X47, X48, X49>
    & PairwiseDifferent<X51, X52, X53, X54, X55, X56, X57, X58, X59>
    & PairwiseDifferent<X61, X62, X63, X64, X65, X66, X67, X68, X69>
    & PairwiseDifferent<X71, X72, X73, X74, X75, X76, X77, X78, X79>
    & PairwiseDifferent<X81, X82, X83, X84, X85, X86, X87, X88, X89>
    & PairwiseDifferent<X91, X92, X93, X94, X95, X96, X97, X98, X99>

    // columns
    & PairwiseDifferent<X11, X21, X31, X41, X51, X61, X71, X81, X91>
    & PairwiseDifferent<X12, X22, X32, X42, X52, X62, X72, X82, X92>
    & PairwiseDifferent<X13, X23, X33, X43, X53, X63, X73, X83, X93>
    & PairwiseDifferent<X14, X24, X34, X44, X54, X64, X74, X84, X94>
    & PairwiseDifferent<X15, X25, X35, X45, X55, X65, X75, X85, X95>
    & PairwiseDifferent<X16, X26, X36, X46, X56, X66, X76, X86, X96>
    & PairwiseDifferent<X17, X27, X37, X47, X57, X67, X77, X87, X97>
    & PairwiseDifferent<X18, X28, X38, X48, X58, X68, X78, X88, X98>
    & PairwiseDifferent<X19, X29, X39, X49, X59, X69, X79, X89, X99>

    // three upper squares
    & PairwiseDifferent<X11, X12, X13, X21, X22, X23, X31, X32, X33>
    & PairwiseDifferent<X14, X15, X16, X24, X25, X26, X34, X35, X36>
    & PairwiseDifferent<X17, X18, X19, X27, X28, X29, X37, X38, X39>

    // three center squares
    & PairwiseDifferent<X41, X42, X43, X51, X52, X53, X61, X62, X63>
    & PairwiseDifferent<X44, X45, X46, X54, X55, X56, X64, X65, X66>
    & PairwiseDifferent<X47, X48, X49, X57, X58, X59, X67, X68, X69>

    // three lower squares
    & PairwiseDifferent<X71, X72, X73, X81, X82, X83, X91, X92, X93>
    & PairwiseDifferent<X74, X75, X76, X84, X85, X86, X94, X95, X96>
    & PairwiseDifferent<X77, X78, X79, X87, X88, X89, X97, X98, X99>,

    [
      X11, X12, X13, X14, X15, X16, X17, X18, X19,
      X21, X22, X23, X24, X25, X26, X27, X28, X29,
      X31, X32, X33, X34, X35, X36, X37, X38, X39,

      X41, X42, X43, X44, X45, X46, X47, X48, X49,
      X51, X52, X53, X54, X55, X56, X57, X58, X59,
      X61, X62, X63, X64, X65, X66, X67, X68, X69,

      X71, X72, X73, X74, X75, X76, X77, X78, X79,
      X81, X82, X83, X84, X85, X86, X87, X88, X89,
      X91, X92, X93, X94, X95, X96, X97, X98, X99
    ]
  ]

type Sudoku = <R>(
  run: <
    X11, X12, X13, X14, X15, X16, X17, X18, X19,
    X21, X22, X23, X24, X25, X26, X27, X28, X29,
    X31, X32, X33, X34, X35, X36, X37, X38, X39,
    X41, X42, X43, X44, X45, X46, X47, X48, X49,
    X51, X52, X53, X54, X55, X56, X57, X58, X59,
    X61, X62, X63, X64, X65, X66, X67, X68, X69,
    X71, X72, X73, X74, X75, X76, X77, X78, X79,
    X81, X82, X83, X84, X85, X86, X87, X88, X89,
    X91, X92, X93, X94, X95, X96, X97, X98, X99
  >(_: Sudoku_<
    X11, X12, X13, X14, X15, X16, X17, X18, X19,
    X21, X22, X23, X24, X25, X26, X27, X28, X29,
    X31, X32, X33, X34, X35, X36, X37, X38, X39,
    X41, X42, X43, X44, X45, X46, X47, X48, X49,
    X51, X52, X53, X54, X55, X56, X57, X58, X59,
    X61, X62, X63, X64, X65, X66, X67, X68, X69,
    X71, X72, X73, X74, X75, X76, X77, X78, X79,
    X81, X82, X83, X84, X85, X86, X87, X88, X89,
    X91, X92, X93, X94, X95, X96, X97, X98, X99
  >) => R
) => R

export const sudoku = <
  X11, X12, X13, X14, X15, X16, X17, X18, X19,
  X21, X22, X23, X24, X25, X26, X27, X28, X29,
  X31, X32, X33, X34, X35, X36, X37, X38, X39,
  X41, X42, X43, X44, X45, X46, X47, X48, X49,
  X51, X52, X53, X54, X55, X56, X57, X58, X59,
  X61, X62, X63, X64, X65, X66, X67, X68, X69,
  X71, X72, X73, X74, X75, X76, X77, X78, X79,
  X81, X82, X83, X84, X85, X86, X87, X88, X89,
  X91, X92, X93, X94, X95, X96, X97, X98, X99
>(mkSudoku: Sudoku_<
  X11, X12, X13, X14, X15, X16, X17, X18, X19,
  X21, X22, X23, X24, X25, X26, X27, X28, X29,
  X31, X32, X33, X34, X35, X36, X37, X38, X39,
  X41, X42, X43, X44, X45, X46, X47, X48, X49,
  X51, X52, X53, X54, X55, X56, X57, X58, X59,
  X61, X62, X63, X64, X65, X66, X67, X68, X69,
  X71, X72, X73, X74, X75, X76, X77, X78, X79,
  X81, X82, X83, X84, X85, X86, X87, X88, X89,
  X91, X92, X93, X94, X95, X96, X97, X98, X99
>): Sudoku => run => run(mkSudoku)

// sudoku([absurd, [
//   _7, _9, _2, _3, _5, _4, _6, _1, _8,
//   _8, _5, _4, _1, _2, _6, _3, _9, _7,
//   _3, _6, _1, _9, _8, _7, _5, _2, _4,

//   _9, _4, _5, _6, _3, _8, _1, _7, _2,
//   _2, _7, _8, _5, _4, _1, _9, _3, _6,
//   _6, _1, _3, _7, _9, _2, _8, _4, _5,

//   _4, _2, _9, _8, _1, _5, _7, _6, _3,
//   _1, _8, _7, _2, _6, _3, _4, _5, _9,
//   _5, _3, _6, _4, _7, _9, _2, _8, _1,
// ]])

// sudoku(() => [
//   _1, _9, _8, _2, _3, _4, _7, __, __,
//   __, _5, __, _7, _9, __, __, __, __,
//   __, _3, _4, __, __, __, __, __, __,

//   __, _1, __, __, __, __, __, __, __,
//   __, _4, __, __, __, __, __, __, __,
//   __, _2, _7, __, __, __, __, __, __,

//   __, __, __, __, __, __, __, __, __,
//   __, __, __, __, __, __, __, __, __,
//   __, __, __, __, __, __, __, __, __,
// ])
