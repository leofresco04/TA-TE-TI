import { useState } from "react"
import Square from "./Components/Square"
import "./index.css"

const TURNS={
  X: "x",
  O: "o"
}
function App() {
  const [board, setBoard] = useState (
    Array(9).fill(null)
  )


  const [turn, setTurn] = useState(TURNS.X)
  
  const updateBoard =(index)=>{
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
     const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
     setTurn(newTurn)
     console.log(turn)
  }

 

  return (
    <main className="board">
      <h1>TA TE TI</h1>
      <section className="game">
        {board.map((turn, index) => (
          <Square 
          key={index}
          updateBoard={updateBoard}
          index={index}>   
          {board[index]}
           </Square>
        ))}
      </section>
      <section className="turn">
        <Square isSelected={ turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={ turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  )
}

export default App
