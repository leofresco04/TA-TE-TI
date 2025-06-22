 import Square from "./Square"
 import ResetButton from "./ResetButton"
 const Winner =({winner, resetGame })=>{
        if (winner === null) return null
        return (
          <section className="winner">
            <div className="text">
              <h2>
                {
                  winner === false ? "TABLAS" : "GANÓ " 
                }
              </h2>
                <header className="win">
                {
                  winner && <Square>{winner}</Square>
                }
              </header>
              <footer>
               <ResetButton resetGame={resetGame}/>
              </footer>
            </div>
              </section>

        )  }
        export default Winner