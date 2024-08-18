import { Set, Record, is, RecordOf } from 'immutable'
import fs from 'node:fs'

type Cell = RecordOf<{ 
  x: number
  y: number 
}>

const makeCell = Record({ x: 0, y: 0 })

function range(start: number, end: number): number[] {
  return [...Array(end - start + 1).keys()].map(i => i+start)
}

function* rowAt(y: number): Generator<Cell> {
  for (const x of range(1, 9)) {
    yield makeCell({ x, y })
  }
}

function* columnAt(x: number): Generator<Cell> {
  for (const y of range(1, 9)) {
    yield makeCell({ x, y })
  }
}

function* squareAt(topLeft: Cell): Generator<Cell> {
  for (const x of range(topLeft.x, topLeft.x+2)) {
    for (const y of range(topLeft.y, topLeft.y+2)) {
      yield makeCell({ x, y })
    }
  }
}

function* allCells(): Generator<Cell> {
  for (const y of range(1, 9)) {
    for (const x of range(1, 9)) {
      yield makeCell({ x, y })
    }
  }
}

function excludeListOf(cell: Cell): Set<Cell> {
  const row = Set(rowAt(cell.y))
  const column = Set(columnAt(cell.x))
  const square = Set(squareAt(makeCell({ 
    x: cell.x - (cell.x-1)%3, 
    y: cell.y - (cell.y-1)%3 
  })))

  return row.union(column).union(square).delete(cell)
}

function showCell(cell: Cell): string {
  return `X${cell.x}${cell.y}`
}

function showParamList(): string[] {
  return [...allCells()].map(cell => `${showCell(cell)} extends Cell,`)
}

function showExcludeList(cell: Cell): string {
  return [...excludeListOf(cell)].map(showCell).join(' | ')
}

function showGrid(): string[] {
  return [...allCells()].map(cell => `Exclude<${showCell(cell)}, ${showExcludeList(cell)}>,`)
}

function unindent(count: number, str: string): string {
  return str.split('\n').map(line => line.slice(count)).join('\n')
}

function showFile(): string {
  const typeParams: string = ''
  const grid: string = ''

  return unindent(4, `
    type Cell = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

    export const sudoku = <
      ${showParamList().join('\n      ')}
    >(grid: 
      [ 
        ${showGrid().join('\n        ')}
      ]
    ) => {}      
  `)
}

console.log(showFile())
