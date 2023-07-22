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
> = [
		Hole | Exclude<X11,
			X12 | X13 | X14 | X15 | X16 | X17 | X18 | X19 | // row
			X21 | X31 | X41 | X51 | X61 | X71 | X81 | X91 | // column
			X21 | X31 | X12 | X22 | X32 | X13 | X23 | X33   // square
		>,

		Hole | Exclude<X12,
			X11 | X13 | X14 | X15 | X16 | X17 | X18 | X19 | // row
			X22 | X32 | X42 | X52 | X62 | X72 | X82 | X92 | // column
			X11 | X21 | X31 | X22 | X32 | X13 | X23 | X33   // square
		>,

		Hole | Exclude<X13,
			X11 | X12 | X14 | X15 | X16 | X17 | X18 | X19 | // row
			X23 | X33 | X43 | X53 | X63 | X73 | X83 | X93 | // column
			X11 | X21 | X31 | X12 | X22 | X32 | X23 | X33   // square
		>,

		Hole | Exclude<X14,
			X11 | X12 | X13 | X15 | X16 | X17 | X18 | X19 | // row
			X24 | X34 | X44 | X54 | X64 | X74 | X84 | X94 | // column
			X24 | X34 | X15 | X25 | X35 | X16 | X26 | X36   // square
		>,

		Hole | Exclude<X15,
			X11 | X12 | X13 | X14 | X16 | X17 | X18 | X19 | // row
			X25 | X35 | X45 | X55 | X65 | X75 | X85 | X95 | // column
			X14 | X24 | X34 | X25 | X35 | X16 | X26 | X36   // square
		>,

		Hole | Exclude<X16,
			X11 | X12 | X13 | X14 | X15 | X17 | X18 | X19 | // row
			X26 | X36 | X46 | X56 | X66 | X76 | X86 | X96 | // column
			X14 | X24 | X34 | X15 | X25 | X35 | X26 | X36   // square
		>,

		Hole | Exclude<X17,
			X11 | X12 | X13 | X14 | X15 | X16 | X18 | X19 | // row
			X27 | X37 | X47 | X57 | X67 | X77 | X87 | X97 | // column
			X27 | X37 | X18 | X28 | X38 | X19 | X29 | X39   // square
		>,

		Hole | Exclude<X18,
			X11 | X12 | X13 | X14 | X15 | X16 | X17 | X19 | // row
			X28 | X38 | X48 | X58 | X68 | X78 | X88 | X98 | // column
			X17 | X27 | X37 | X28 | X38 | X19 | X29 | X39   // square
		>,

		Hole | Exclude<X19,
			X11 | X12 | X13 | X14 | X15 | X16 | X17 | X18 | // row
			X29 | X39 | X49 | X59 | X69 | X79 | X89 | X99 | // column
			X17 | X27 | X37 | X18 | X28 | X38 | X29 | X39   // square
		>,

		Hole | Exclude<X21,
			X22 | X23 | X24 | X25 | X26 | X27 | X28 | X29 | // row
			X11 | X31 | X41 | X51 | X61 | X71 | X81 | X91 | // column
			X11 | X31 | X12 | X22 | X32 | X13 | X23 | X33   // square
		>,

		Hole | Exclude<X22,
			X21 | X23 | X24 | X25 | X26 | X27 | X28 | X29 | // row
			X12 | X32 | X42 | X52 | X62 | X72 | X82 | X92 | // column
			X11 | X21 | X31 | X12 | X32 | X13 | X23 | X33   // square
		>,

		Hole | Exclude<X23,
			X21 | X22 | X24 | X25 | X26 | X27 | X28 | X29 | // row
			X13 | X33 | X43 | X53 | X63 | X73 | X83 | X93 | // column
			X11 | X21 | X31 | X12 | X22 | X32 | X13 | X33   // square
		>,

		Hole | Exclude<X24,
			X21 | X22 | X23 | X25 | X26 | X27 | X28 | X29 | // row
			X14 | X34 | X44 | X54 | X64 | X74 | X84 | X94 | // column
			X14 | X34 | X15 | X25 | X35 | X16 | X26 | X36   // square
		>,

		Hole | Exclude<X25,
			X21 | X22 | X23 | X24 | X26 | X27 | X28 | X29 | // row
			X15 | X35 | X45 | X55 | X65 | X75 | X85 | X95 | // column
			X14 | X24 | X34 | X15 | X35 | X16 | X26 | X36   // square
		>,

		Hole | Exclude<X26,
			X21 | X22 | X23 | X24 | X25 | X27 | X28 | X29 | // row
			X16 | X36 | X46 | X56 | X66 | X76 | X86 | X96 | // column
			X14 | X24 | X34 | X15 | X25 | X35 | X16 | X36   // square
		>,

		Hole | Exclude<X27,
			X21 | X22 | X23 | X24 | X25 | X26 | X28 | X29 | // row
			X17 | X37 | X47 | X57 | X67 | X77 | X87 | X97 | // column
			X17 | X37 | X18 | X28 | X38 | X19 | X29 | X39   // square
		>,

		Hole | Exclude<X28,
			X21 | X22 | X23 | X24 | X25 | X26 | X27 | X29 | // row
			X18 | X38 | X48 | X58 | X68 | X78 | X88 | X98 | // column
			X17 | X27 | X37 | X18 | X38 | X19 | X29 | X39   // square
		>,

		Hole | Exclude<X29,
			X21 | X22 | X23 | X24 | X25 | X26 | X27 | X28 | // row
			X19 | X39 | X49 | X59 | X69 | X79 | X89 | X99 | // column
			X17 | X27 | X37 | X18 | X28 | X38 | X19 | X39   // square
		>,

		Hole | Exclude<X31,
			X32 | X33 | X34 | X35 | X36 | X37 | X38 | X39 | // row
			X11 | X21 | X41 | X51 | X61 | X71 | X81 | X91 | // column
			X11 | X21 | X12 | X22 | X32 | X13 | X23 | X33   // square
		>,

		Hole | Exclude<X32,
			X31 | X33 | X34 | X35 | X36 | X37 | X38 | X39 | // row
			X12 | X22 | X42 | X52 | X62 | X72 | X82 | X92 | // column
			X11 | X21 | X31 | X12 | X22 | X13 | X23 | X33   // square
		>,

		Hole | Exclude<X33,
			X31 | X32 | X34 | X35 | X36 | X37 | X38 | X39 | // row
			X13 | X23 | X43 | X53 | X63 | X73 | X83 | X93 | // column
			X11 | X21 | X31 | X12 | X22 | X32 | X13 | X23   // square
		>,

		Hole | Exclude<X34,
			X31 | X32 | X33 | X35 | X36 | X37 | X38 | X39 | // row
			X14 | X24 | X44 | X54 | X64 | X74 | X84 | X94 | // column
			X14 | X24 | X15 | X25 | X35 | X16 | X26 | X36   // square
		>,

		Hole | Exclude<X35,
			X31 | X32 | X33 | X34 | X36 | X37 | X38 | X39 | // row
			X15 | X25 | X45 | X55 | X65 | X75 | X85 | X95 | // column
			X14 | X24 | X34 | X15 | X25 | X16 | X26 | X36   // square
		>,

		Hole | Exclude<X36,
			X31 | X32 | X33 | X34 | X35 | X37 | X38 | X39 | // row
			X16 | X26 | X46 | X56 | X66 | X76 | X86 | X96 | // column
			X14 | X24 | X34 | X15 | X25 | X35 | X16 | X26   // square
		>,

		Hole | Exclude<X37,
			X31 | X32 | X33 | X34 | X35 | X36 | X38 | X39 | // row
			X17 | X27 | X47 | X57 | X67 | X77 | X87 | X97 | // column
			X17 | X27 | X18 | X28 | X38 | X19 | X29 | X39   // square
		>,

		Hole | Exclude<X38,
			X31 | X32 | X33 | X34 | X35 | X36 | X37 | X39 | // row
			X18 | X28 | X48 | X58 | X68 | X78 | X88 | X98 | // column
			X17 | X27 | X37 | X18 | X28 | X19 | X29 | X39   // square
		>,

		Hole | Exclude<X39,
			X31 | X32 | X33 | X34 | X35 | X36 | X37 | X38 | // row
			X19 | X29 | X49 | X59 | X69 | X79 | X89 | X99 | // column
			X17 | X27 | X37 | X18 | X28 | X38 | X19 | X29   // square
		>,

		Hole | Exclude<X41,
			X42 | X43 | X44 | X45 | X46 | X47 | X48 | X49 | // row
			X11 | X21 | X31 | X51 | X61 | X71 | X81 | X91 | // column
			X51 | X61 | X42 | X52 | X62 | X43 | X53 | X63   // square
		>,

		Hole | Exclude<X42,
			X41 | X43 | X44 | X45 | X46 | X47 | X48 | X49 | // row
			X12 | X22 | X32 | X52 | X62 | X72 | X82 | X92 | // column
			X41 | X51 | X61 | X52 | X62 | X43 | X53 | X63   // square
		>,

		Hole | Exclude<X43,
			X41 | X42 | X44 | X45 | X46 | X47 | X48 | X49 | // row
			X13 | X23 | X33 | X53 | X63 | X73 | X83 | X93 | // column
			X41 | X51 | X61 | X42 | X52 | X62 | X53 | X63   // square
		>,

		Hole | Exclude<X44,
			X41 | X42 | X43 | X45 | X46 | X47 | X48 | X49 | // row
			X14 | X24 | X34 | X54 | X64 | X74 | X84 | X94 | // column
			X54 | X64 | X45 | X55 | X65 | X46 | X56 | X66   // square
		>,

		Hole | Exclude<X45,
			X41 | X42 | X43 | X44 | X46 | X47 | X48 | X49 | // row
			X15 | X25 | X35 | X55 | X65 | X75 | X85 | X95 | // column
			X44 | X54 | X64 | X55 | X65 | X46 | X56 | X66   // square
		>,

		Hole | Exclude<X46,
			X41 | X42 | X43 | X44 | X45 | X47 | X48 | X49 | // row
			X16 | X26 | X36 | X56 | X66 | X76 | X86 | X96 | // column
			X44 | X54 | X64 | X45 | X55 | X65 | X56 | X66   // square
		>,

		Hole | Exclude<X47,
			X41 | X42 | X43 | X44 | X45 | X46 | X48 | X49 | // row
			X17 | X27 | X37 | X57 | X67 | X77 | X87 | X97 | // column
			X57 | X67 | X48 | X58 | X68 | X49 | X59 | X69   // square
		>,

		Hole | Exclude<X48,
			X41 | X42 | X43 | X44 | X45 | X46 | X47 | X49 | // row
			X18 | X28 | X38 | X58 | X68 | X78 | X88 | X98 | // column
			X47 | X57 | X67 | X58 | X68 | X49 | X59 | X69   // square
		>,

		Hole | Exclude<X49,
			X41 | X42 | X43 | X44 | X45 | X46 | X47 | X48 | // row
			X19 | X29 | X39 | X59 | X69 | X79 | X89 | X99 | // column
			X47 | X57 | X67 | X48 | X58 | X68 | X59 | X69   // square
		>,

		Hole | Exclude<X51,
			X52 | X53 | X54 | X55 | X56 | X57 | X58 | X59 | // row
			X11 | X21 | X31 | X41 | X61 | X71 | X81 | X91 | // column
			X41 | X61 | X42 | X52 | X62 | X43 | X53 | X63   // square
		>,

		Hole | Exclude<X52,
			X51 | X53 | X54 | X55 | X56 | X57 | X58 | X59 | // row
			X12 | X22 | X32 | X42 | X62 | X72 | X82 | X92 | // column
			X41 | X51 | X61 | X42 | X62 | X43 | X53 | X63   // square
		>,

		Hole | Exclude<X53,
			X51 | X52 | X54 | X55 | X56 | X57 | X58 | X59 | // row
			X13 | X23 | X33 | X43 | X63 | X73 | X83 | X93 | // column
			X41 | X51 | X61 | X42 | X52 | X62 | X43 | X63   // square
		>,

		Hole | Exclude<X54,
			X51 | X52 | X53 | X55 | X56 | X57 | X58 | X59 | // row
			X14 | X24 | X34 | X44 | X64 | X74 | X84 | X94 | // column
			X44 | X64 | X45 | X55 | X65 | X46 | X56 | X66   // square
		>,

		Hole | Exclude<X55,
			X51 | X52 | X53 | X54 | X56 | X57 | X58 | X59 | // row
			X15 | X25 | X35 | X45 | X65 | X75 | X85 | X95 | // column
			X44 | X54 | X64 | X45 | X65 | X46 | X56 | X66   // square
		>,

		Hole | Exclude<X56,
			X51 | X52 | X53 | X54 | X55 | X57 | X58 | X59 | // row
			X16 | X26 | X36 | X46 | X66 | X76 | X86 | X96 | // column
			X44 | X54 | X64 | X45 | X55 | X65 | X46 | X66   // square
		>,

		Hole | Exclude<X57,
			X51 | X52 | X53 | X54 | X55 | X56 | X58 | X59 | // row
			X17 | X27 | X37 | X47 | X67 | X77 | X87 | X97 | // column
			X47 | X67 | X48 | X58 | X68 | X49 | X59 | X69   // square
		>,

		Hole | Exclude<X58,
			X51 | X52 | X53 | X54 | X55 | X56 | X57 | X59 | // row
			X18 | X28 | X38 | X48 | X68 | X78 | X88 | X98 | // column
			X47 | X57 | X67 | X48 | X68 | X49 | X59 | X69   // square
		>,

		Hole | Exclude<X59,
			X51 | X52 | X53 | X54 | X55 | X56 | X57 | X58 | // row
			X19 | X29 | X39 | X49 | X69 | X79 | X89 | X99 | // column
			X47 | X57 | X67 | X48 | X58 | X68 | X49 | X69   // square
		>,

		Hole | Exclude<X61,
			X62 | X63 | X64 | X65 | X66 | X67 | X68 | X69 | // row
			X11 | X21 | X31 | X41 | X51 | X71 | X81 | X91 | // column
			X41 | X51 | X42 | X52 | X62 | X43 | X53 | X63   // square
		>,

		Hole | Exclude<X62,
			X61 | X63 | X64 | X65 | X66 | X67 | X68 | X69 | // row
			X12 | X22 | X32 | X42 | X52 | X72 | X82 | X92 | // column
			X41 | X51 | X61 | X42 | X52 | X43 | X53 | X63   // square
		>,

		Hole | Exclude<X63,
			X61 | X62 | X64 | X65 | X66 | X67 | X68 | X69 | // row
			X13 | X23 | X33 | X43 | X53 | X73 | X83 | X93 | // column
			X41 | X51 | X61 | X42 | X52 | X62 | X43 | X53   // square
		>,

		Hole | Exclude<X64,
			X61 | X62 | X63 | X65 | X66 | X67 | X68 | X69 | // row
			X14 | X24 | X34 | X44 | X54 | X74 | X84 | X94 | // column
			X44 | X54 | X45 | X55 | X65 | X46 | X56 | X66   // square
		>,

		Hole | Exclude<X65,
			X61 | X62 | X63 | X64 | X66 | X67 | X68 | X69 | // row
			X15 | X25 | X35 | X45 | X55 | X75 | X85 | X95 | // column
			X44 | X54 | X64 | X45 | X55 | X46 | X56 | X66   // square
		>,

		Hole | Exclude<X66,
			X61 | X62 | X63 | X64 | X65 | X67 | X68 | X69 | // row
			X16 | X26 | X36 | X46 | X56 | X76 | X86 | X96 | // column
			X44 | X54 | X64 | X45 | X55 | X65 | X46 | X56   // square
		>,

		Hole | Exclude<X67,
			X61 | X62 | X63 | X64 | X65 | X66 | X68 | X69 | // row
			X17 | X27 | X37 | X47 | X57 | X77 | X87 | X97 | // column
			X47 | X57 | X48 | X58 | X68 | X49 | X59 | X69   // square
		>,

		Hole | Exclude<X68,
			X61 | X62 | X63 | X64 | X65 | X66 | X67 | X69 | // row
			X18 | X28 | X38 | X48 | X58 | X78 | X88 | X98 | // column
			X47 | X57 | X67 | X48 | X58 | X49 | X59 | X69   // square
		>,

		Hole | Exclude<X69,
			X61 | X62 | X63 | X64 | X65 | X66 | X67 | X68 | // row
			X19 | X29 | X39 | X49 | X59 | X79 | X89 | X99 | // column
			X47 | X57 | X67 | X48 | X58 | X68 | X49 | X59   // square
		>,

		Hole | Exclude<X71,
			X72 | X73 | X74 | X75 | X76 | X77 | X78 | X79 | // row
			X11 | X21 | X31 | X41 | X51 | X61 | X81 | X91 | // column
			X81 | X91 | X72 | X82 | X92 | X73 | X83 | X93   // square
		>,

		Hole | Exclude<X72,
			X71 | X73 | X74 | X75 | X76 | X77 | X78 | X79 | // row
			X12 | X22 | X32 | X42 | X52 | X62 | X82 | X92 | // column
			X71 | X81 | X91 | X82 | X92 | X73 | X83 | X93   // square
		>,

		Hole | Exclude<X73,
			X71 | X72 | X74 | X75 | X76 | X77 | X78 | X79 | // row
			X13 | X23 | X33 | X43 | X53 | X63 | X83 | X93 | // column
			X71 | X81 | X91 | X72 | X82 | X92 | X83 | X93   // square
		>,

		Hole | Exclude<X74,
			X71 | X72 | X73 | X75 | X76 | X77 | X78 | X79 | // row
			X14 | X24 | X34 | X44 | X54 | X64 | X84 | X94 | // column
			X84 | X94 | X75 | X85 | X95 | X76 | X86 | X96   // square
		>,

		Hole | Exclude<X75,
			X71 | X72 | X73 | X74 | X76 | X77 | X78 | X79 | // row
			X15 | X25 | X35 | X45 | X55 | X65 | X85 | X95 | // column
			X74 | X84 | X94 | X85 | X95 | X76 | X86 | X96   // square
		>,

		Hole | Exclude<X76,
			X71 | X72 | X73 | X74 | X75 | X77 | X78 | X79 | // row
			X16 | X26 | X36 | X46 | X56 | X66 | X86 | X96 | // column
			X74 | X84 | X94 | X75 | X85 | X95 | X86 | X96   // square
		>,

		Hole | Exclude<X77,
			X71 | X72 | X73 | X74 | X75 | X76 | X78 | X79 | // row
			X17 | X27 | X37 | X47 | X57 | X67 | X87 | X97 | // column
			X87 | X97 | X78 | X88 | X98 | X79 | X89 | X99   // square
		>,

		Hole | Exclude<X78,
			X71 | X72 | X73 | X74 | X75 | X76 | X77 | X79 | // row
			X18 | X28 | X38 | X48 | X58 | X68 | X88 | X98 | // column
			X77 | X87 | X97 | X88 | X98 | X79 | X89 | X99   // square
		>,

		Hole | Exclude<X79,
			X71 | X72 | X73 | X74 | X75 | X76 | X77 | X78 | // row
			X19 | X29 | X39 | X49 | X59 | X69 | X89 | X99 | // column
			X77 | X87 | X97 | X78 | X88 | X98 | X89 | X99   // square
		>,

		Hole | Exclude<X81,
			X82 | X83 | X84 | X85 | X86 | X87 | X88 | X89 | // row
			X11 | X21 | X31 | X41 | X51 | X61 | X71 | X91 | // column
			X71 | X91 | X72 | X82 | X92 | X73 | X83 | X93   // square
		>,

		Hole | Exclude<X82,
			X81 | X83 | X84 | X85 | X86 | X87 | X88 | X89 | // row
			X12 | X22 | X32 | X42 | X52 | X62 | X72 | X92 | // column
			X71 | X81 | X91 | X72 | X92 | X73 | X83 | X93   // square
		>,

		Hole | Exclude<X83,
			X81 | X82 | X84 | X85 | X86 | X87 | X88 | X89 | // row
			X13 | X23 | X33 | X43 | X53 | X63 | X73 | X93 | // column
			X71 | X81 | X91 | X72 | X82 | X92 | X73 | X93   // square
		>,

		Hole | Exclude<X84,
			X81 | X82 | X83 | X85 | X86 | X87 | X88 | X89 | // row
			X14 | X24 | X34 | X44 | X54 | X64 | X74 | X94 | // column
			X74 | X94 | X75 | X85 | X95 | X76 | X86 | X96   // square
		>,

		Hole | Exclude<X85,
			X81 | X82 | X83 | X84 | X86 | X87 | X88 | X89 | // row
			X15 | X25 | X35 | X45 | X55 | X65 | X75 | X95 | // column
			X74 | X84 | X94 | X75 | X95 | X76 | X86 | X96   // square
		>,

		Hole | Exclude<X86,
			X81 | X82 | X83 | X84 | X85 | X87 | X88 | X89 | // row
			X16 | X26 | X36 | X46 | X56 | X66 | X76 | X96 | // column
			X74 | X84 | X94 | X75 | X85 | X95 | X76 | X96   // square
		>,

		Hole | Exclude<X87,
			X81 | X82 | X83 | X84 | X85 | X86 | X88 | X89 | // row
			X17 | X27 | X37 | X47 | X57 | X67 | X77 | X97 | // column
			X77 | X97 | X78 | X88 | X98 | X79 | X89 | X99   // square
		>,

		Hole | Exclude<X88,
			X81 | X82 | X83 | X84 | X85 | X86 | X87 | X89 | // row
			X18 | X28 | X38 | X48 | X58 | X68 | X78 | X98 | // column
			X77 | X87 | X97 | X78 | X98 | X79 | X89 | X99   // square
		>,

		Hole | Exclude<X89,
			X81 | X82 | X83 | X84 | X85 | X86 | X87 | X88 | // row
			X19 | X29 | X39 | X49 | X59 | X69 | X79 | X99 | // column
			X77 | X87 | X97 | X78 | X88 | X98 | X79 | X99   // square
		>,

		Hole | Exclude<X91,
			X92 | X93 | X94 | X95 | X96 | X97 | X98 | X99 | // row
			X11 | X21 | X31 | X41 | X51 | X61 | X71 | X81 | // column
			X71 | X81 | X72 | X82 | X92 | X73 | X83 | X93   // square
		>,

		Hole | Exclude<X92,
			X91 | X93 | X94 | X95 | X96 | X97 | X98 | X99 | // row
			X12 | X22 | X32 | X42 | X52 | X62 | X72 | X82 | // column
			X71 | X81 | X91 | X72 | X82 | X73 | X83 | X93   // square
		>,

		Hole | Exclude<X93,
			X91 | X92 | X94 | X95 | X96 | X97 | X98 | X99 | // row
			X13 | X23 | X33 | X43 | X53 | X63 | X73 | X83 | // column
			X71 | X81 | X91 | X72 | X82 | X92 | X73 | X83   // square
		>,

		Hole | Exclude<X94,
			X91 | X92 | X93 | X95 | X96 | X97 | X98 | X99 | // row
			X14 | X24 | X34 | X44 | X54 | X64 | X74 | X84 | // column
			X74 | X84 | X75 | X85 | X95 | X76 | X86 | X96   // square
		>,

		Hole | Exclude<X95,
			X91 | X92 | X93 | X94 | X96 | X97 | X98 | X99 | // row
			X15 | X25 | X35 | X45 | X55 | X65 | X75 | X85 | // column
			X74 | X84 | X94 | X75 | X85 | X76 | X86 | X96   // square
		>,

		Hole | Exclude<X96,
			X91 | X92 | X93 | X94 | X95 | X97 | X98 | X99 | // row
			X16 | X26 | X36 | X46 | X56 | X66 | X76 | X86 | // column
			X74 | X84 | X94 | X75 | X85 | X95 | X76 | X86   // square
		>,

		Hole | Exclude<X97,
			X91 | X92 | X93 | X94 | X95 | X96 | X98 | X99 | // row
			X17 | X27 | X37 | X47 | X57 | X67 | X77 | X87 | // column
			X77 | X87 | X78 | X88 | X98 | X79 | X89 | X99   // square
		>,

		Hole | Exclude<X98,
			X91 | X92 | X93 | X94 | X95 | X96 | X97 | X99 | // row
			X18 | X28 | X38 | X48 | X58 | X68 | X78 | X88 | // column
			X77 | X87 | X97 | X78 | X88 | X79 | X89 | X99   // square
		>,

		Hole | Exclude<X99,
			X91 | X92 | X93 | X94 | X95 | X96 | X97 | X98 | // row
			X19 | X29 | X39 | X49 | X59 | X69 | X79 | X89 | // column
			X77 | X87 | X97 | X78 | X88 | X98 | X79 | X89   // square
		>,
	]

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

sudoku([
	_7, _9, _2, _3, _5, _4, _6, _1, _8,
	_8, _5, _4, _1, _2, _6, _3, _9, _7,
	_3, _6, _1, _9, _8, _7, _5, _2, _4,

	_9, _4, _5, _6, _3, _8, _1, _7, _2,
	_2, _7, _8, _5, _4, _1, _9, _3, _6,
	_6, _1, _3, _7, _9, _2, _8, _4, _5,

	_4, _2, _9, _8, _1, _5, _7, _6, _3,
	_1, _8, _7, _2, _6, _3, _4, _5, _9,
	_5, _3, _6, _4, _7, _9, _2, _8, _1,
])

sudoku([
	_1, _9, _8, _2, _3, _4, _7, __, __,
	__, _5, __, _7, _9, __, __, __, __,
	__, _3, _4, __, __, __, __, __, __,

	__, _1, __, __, __, __, __, __, __,
	__, _4, __, __, __, __, __, __, __,
	__, _2, _7, __, __, __, __, __, __,

	__, __, __, __, __, __, __, __, __,
	__, __, __, __, __, __, __, __, __,
	__, __, __, __, __, __, __, __, __,
])

// const print = () => {
// 	const nums = [1,2,3,4,5,6,7,8,9]

// 	for (const i of nums) {
// 		for (const j of nums) {
// 			const cell = `X${i}${j}`

// 			const row = nums.map(num => `X${i}${num}`)
// 				.filter(c => cell !== c)
// 				.join(' | ')

// 			const col = nums.map(num => `X${num}${j}`)
// 				.filter(c => cell !== c)
// 				.join(' | ')

// 			const x = Math.ceil(i / 3) * 3 - 1
// 			const y = Math.ceil(j / 3) * 3 - 1

// 			const sqr = [ 
// 				[x-1, y-1], [x, y-1], [x+1, y-1],
// 				[x-1,   y], [x,   y], [x+1,   y],
// 				[x-1, y+1], [x, y+1], [x+1, y+1]
// 		  ].map(([x,y]) => `X${x}${y}`)
// 				.filter(c => cell !== c)
// 				.join(' | ')

// 			cosole.log(`
// 				Hole | Exclude<${cell}, 
// 					${row} | // row
// 					${col} | // column
// 				 	${sqr}   // square
// 				>,		
// 			`)
// 		}	
// 	}
// }

// print()
