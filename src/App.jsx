import { useState } from 'react'

const GRID_SIZE = 16
const DEFAULT_COLOR = '#ffffff' // white = unpainted

function makeEmptyGrid() {
  return Array.from(
    { length: GRID_SIZE },
    () => Array(GRID_SIZE).fill(DEFAULT_COLOR)   
  )
}

function paint(row, column) {
  const temp = grid.map(r => r.slice())

  temp[row][col] = currentColor

  setGrid(temp)
}

function App() {
  const [grid, setGrid] = useState(makeEmptyGrid)

  const [currentColor, setCurrentColor] = useState('#1a1a1a')

  return (
    <div className="pixel-art">
    <h1>Pixel Art Editor</h1>
    <label className="pixel-tools">
      Color
      <input type="color" value={currentColor} onCHange={e => setCurrentColor(e.target.value)} />
    </label>

    <div
      className="pixel-grid"
      style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
    >
      {grid.map((row, r) =>
        row.map((color, c) => (
          <button
            key={`${r}-${c}`}
            className="pixel"
            style={{ background: color }}
            aria-label={`Pixel ${r}, ${c}`}
            onClick={() => paint(r, c)}
          />
        ))
      )}
    </div>
  </div>
  )
}

export default App
