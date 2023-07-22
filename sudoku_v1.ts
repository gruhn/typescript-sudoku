export default {}

type False = never

type Implies<X, Y> = (_: X) => Y

type Not<X> = Implies<X, False>

type True = Not<False>

type Equals<X, Y> = X extends Y ? (Y extends X ? True : False) : False

// ----------------------------------

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

type Cell = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

type Sudoku<
	X11 extends Cell, X12 extends Cell, X13 extends Cell, X14 extends Cell, X15 extends Cell, X16 extends Cell, X17 extends Cell, X18 extends Cell, X19 extends Cell,
	X21 extends Cell, X22 extends Cell, X23 extends Cell, X24 extends Cell, X25 extends Cell, X26 extends Cell, X27 extends Cell, X28 extends Cell, X29 extends Cell,
	X31 extends Cell, X32 extends Cell, X33 extends Cell, X34 extends Cell, X35 extends Cell, X36 extends Cell, X37 extends Cell, X38 extends Cell, X39 extends Cell,
	X41 extends Cell, X42 extends Cell, X43 extends Cell, X44 extends Cell, X45 extends Cell, X46 extends Cell, X47 extends Cell, X48 extends Cell, X49 extends Cell,
	X51 extends Cell, X52 extends Cell, X53 extends Cell, X54 extends Cell, X55 extends Cell, X56 extends Cell, X57 extends Cell, X58 extends Cell, X59 extends Cell,
	X61 extends Cell, X62 extends Cell, X63 extends Cell, X64 extends Cell, X65 extends Cell, X66 extends Cell, X67 extends Cell, X68 extends Cell, X69 extends Cell,
	X71 extends Cell, X72 extends Cell, X73 extends Cell, X74 extends Cell, X75 extends Cell, X76 extends Cell, X77 extends Cell, X78 extends Cell, X79 extends Cell,
	X81 extends Cell, X82 extends Cell, X83 extends Cell, X84 extends Cell, X85 extends Cell, X86 extends Cell, X87 extends Cell, X88 extends Cell, X89 extends Cell,
	X91 extends Cell, X92 extends Cell, X93 extends Cell, X94 extends Cell, X95 extends Cell, X96 extends Cell, X97 extends Cell, X98 extends Cell, X99 extends Cell
> =
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
	& PairwiseDifferent<X77, X78, X79, X87, X88, X89, X97, X98, X99>


const sudoku: Sudoku<
	7, 9, 2, 3, 5, 4, 6, 1, 8,
	8, 5, 4, 1, 2, 6, 3, 9, 7,
	3, 6, 1, 9, 8, 7, 5, 2, 4,

	9, 4, 5, 6, 3, 8, 1, 7, 2,
	2, 7, 8, 5, 4, 1, 9, 3, 6,
	6, 1, 3, 7, 9, 2, 8, 4, 5,

	4, 2, 9, 8, 1, 5, 7, 6, 3,
	1, 8, 7, 2, 6, 3, 4, 5, 9,
	5, 3, 6, 4, 7, 9, 2, 8, 1
> = absurd
