import { useState } from "react"
import Square from "./Components/Square"
import "./index.css"
import { Button } from "@mui/material"
import ResetButton from "./Components/ResetButton"
import Winner from "./Components/Winner"
//declaramos los elementos que van a tener los turnos 
const TURNS = {
  X: "x",
  O: "o"
}
//conmbos de ganandores
const winnerCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [1, 4, 7],
  [0, 3, 6],
  [2, 5, 8],
  [2, 4, 6],


]

function App() {
  //le damos null a todos los casilleros
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )

  //verificamos los ganadores para ver si x u o ganó
  const check = (boardCheck) => {
    for (const combo of winnerCombos) {
      const [a, b, c] = combo
      if (
        boardCheck[a] &&
        boardCheck[a] === boardCheck[b] &&
        boardCheck[a] === boardCheck[c]
      ) {
        return boardCheck[a]
      }
    }
    return null


  }
  const checkEndGame =(newBoard)=>{
    return newBoard.every((square)=> square !== null )
  }

  //iniciamos el turno en x
  const [turn, setTurn] = useState(TURNS.X)

  //buscamos ganador
  const [winner, setWinner] = useState(null)// null es que no hay ganandor, false empate y true ganador

  const updateBoard = (index) => {
    //preguntamos si la posicion teine algo, si, si tiene, no sigue y si hay ganador tampoco.
    if (board[index] || winner) return
    //con spred operetor hacemos una copia de board
    const newBoard = [...board]
    //aqui le damos el valor que tenia board al momento de clickkear sea x u o
    newBoard[index] = turn
    // y aqui ese valor lo abosrbe board para renderizarlo en square con board[index]
    setBoard(newBoard)
    //aqui verificamos de quien es el turno, si turn está en x al clickear pasa a o y viceversa
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    //aqui turn absorbe el valor x u o que se le de a newTrun
    setTurn(newTurn)
    //revisar si hay ganador, newBoard le da valor a const check =(boardCheck) de arriba el cual busca ganador en los combos
    const newWinner = check(newBoard)
    if (
      newWinner
    )//verificamos si es null o si devuelve un ganador en check
    {
      setWinner(newWinner) //aqui winner absorbe el valor de newWinner que viene de chec


    }   //check si terminó el juego
else if(checkEndGame(newBoard)){
  setWinner(false)
}
 

  }
  //reseteamos todo el juego, iniicamos de 0
const resetGame=()=>{
  setTurn(TURNS.X)
   setBoard(
    Array(9).fill(null))
  setWinner(null)
  
}


  return (
    <main className="board">
      <h1>TA TE TI of leofresco04</h1>
      <ResetButton resetGame={resetGame}/>
      <section className="game">
        {board.map((turn, index) => (
          <Square
            key={index}
            updateBoard={updateBoard}
            index={index}>

            {turn}

          </Square>
        ))}
      </section>
      <section className="turn">
        {/* renderizamos el turno */}
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        
      </section>

     <Winner winner={winner} resetGame={resetGame}/>
            

        
    

    </main>
  )
}

export default App
