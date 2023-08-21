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

type Cell = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

type IsCell<X> = X extends Cell ? unknown : never

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
> =
  [
    X11, X12, X13, X14, X15, X16, X17, X18, X19,
    X21, X22, X23, X24, X25, X26, X27, X28, X29,
    X31, X32, X33, X34, X35, X36, X37, X38, X39,
    X41, X42, X43, X44, X45, X46, X47, X48, X49,
    X51, X52, X53, X54, X55, X56, X57, X58, X59,
    X61, X62, X63, X64, X65, X66, X67, X68, X69,
    X71, X72, X73, X74, X75, X76, X77, X78, X79,
    X81, X82, X83, X84, X85, X86, X87, X88, X89,
    X91, X92, X93, X94, X95, X96, X97, X98, X99,
  ]

  & IsCell<X11> & IsCell<X12> & IsCell<X13> & IsCell<X14> & IsCell<X15> & IsCell<X16> & IsCell<X17> & IsCell<X18> & IsCell<X19>
  & IsCell<X21> & IsCell<X22> & IsCell<X23> & IsCell<X24> & IsCell<X25> & IsCell<X26> & IsCell<X27> & IsCell<X28> & IsCell<X29>
  & IsCell<X31> & IsCell<X32> & IsCell<X33> & IsCell<X34> & IsCell<X35> & IsCell<X36> & IsCell<X37> & IsCell<X38> & IsCell<X39>
  & IsCell<X41> & IsCell<X42> & IsCell<X43> & IsCell<X44> & IsCell<X45> & IsCell<X46> & IsCell<X47> & IsCell<X48> & IsCell<X49>
  & IsCell<X51> & IsCell<X52> & IsCell<X53> & IsCell<X54> & IsCell<X55> & IsCell<X56> & IsCell<X57> & IsCell<X58> & IsCell<X59>
  & IsCell<X61> & IsCell<X62> & IsCell<X63> & IsCell<X64> & IsCell<X65> & IsCell<X66> & IsCell<X67> & IsCell<X68> & IsCell<X69>
  & IsCell<X71> & IsCell<X72> & IsCell<X73> & IsCell<X74> & IsCell<X75> & IsCell<X76> & IsCell<X77> & IsCell<X78> & IsCell<X79>
  & IsCell<X81> & IsCell<X82> & IsCell<X83> & IsCell<X84> & IsCell<X85> & IsCell<X86> & IsCell<X87> & IsCell<X88> & IsCell<X89>
  & IsCell<X91> & IsCell<X92> & IsCell<X93> & IsCell<X94> & IsCell<X95> & IsCell<X96> & IsCell<X97> & IsCell<X98> & IsCell<X99>

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


type MkSudoku = <R>(get: <
  X11, X12, X13, X14, X15, X16, X17, X18, X19,
  X21, X22, X23, X24, X25, X26, X27, X28, X29,
  X31, X32, X33, X34, X35, X36, X37, X38, X39,
  X41, X42, X43, X44, X45, X46, X47, X48, X49,
  X51, X52, X53, X54, X55, X56, X57, X58, X59,
  X61, X62, X63, X64, X65, X66, X67, X68, X69,
  X71, X72, X73, X74, X75, X76, X77, X78, X79,
  X81, X82, X83, X84, X85, X86, X87, X88, X89,
  X91, X92, X93, X94, X95, X96, X97, X98, X99,
>(_ : Sudoku_<
  X11, X12, X13, X14, X15, X16, X17, X18, X19,
  X21, X22, X23, X24, X25, X26, X27, X28, X29,
  X31, X32, X33, X34, X35, X36, X37, X38, X39,
  X41, X42, X43, X44, X45, X46, X47, X48, X49,
  X51, X52, X53, X54, X55, X56, X57, X58, X59,
  X61, X62, X63, X64, X65, X66, X67, X68, X69,
  X71, X72, X73, X74, X75, X76, X77, X78, X79,
  X81, X82, X83, X84, X85, X86, X87, X88, X89,
  X91, X92, X93, X94, X95, X96, X97, X98, X99
>) => R) => R

const sudoku = <
  X11, X12, X13, X14, X15, X16, X17, X18, X19,
  X21, X22, X23, X24, X25, X26, X27, X28, X29,
  X31, X32, X33, X34, X35, X36, X37, X38, X39,
  X41, X42, X43, X44, X45, X46, X47, X48, X49,
  X51, X52, X53, X54, X55, X56, X57, X58, X59,
  X61, X62, X63, X64, X65, X66, X67, X68, X69,
  X71, X72, X73, X74, X75, X76, X77, X78, X79,
  X81, X82, X83, X84, X85, X86, X87, X88, X89,
  X91, X92, X93, X94, X95, X96, X97, X98, X99,
>(sudoku_: Sudoku_<
	X11, X12, X13, X14, X15, X16, X17, X18, X19,
  X21, X22, X23, X24, X25, X26, X27, X28, X29,
  X31, X32, X33, X34, X35, X36, X37, X38, X39,
  X41, X42, X43, X44, X45, X46, X47, X48, X49,
  X51, X52, X53, X54, X55, X56, X57, X58, X59,
  X61, X62, X63, X64, X65, X66, X67, X68, X69,
  X71, X72, X73, X74, X75, X76, X77, X78, X79,
  X81, X82, X83, X84, X85, X86, X87, X88, X89,
  X91, X92, X93, X94, X95, X96, X97, X98, X99
>): MkSudoku => get => get(sudoku_)

const _1 : 1 = 1
const _2 : 2 = 2
const _3 : 3 = 3
const _4 : 4 = 4
const _5 : 5 = 5
const _6 : 6 = 6
const _7 : 7 = 7
const _8 : 8 = 8
const _9 : 9 = 9

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

