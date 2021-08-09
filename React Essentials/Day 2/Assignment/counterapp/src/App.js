import React, {useState} from "react"
import "./style.css"

const App = () => {
    let [score, setScore] = useState(0)
    return (
        <div>
            <div class="wrapper">
                <h1>CLICK TILL ETERNITY</h1><br/>
                <h3>Your Score</h3>
                <h2>{score}</h2>
                <button onClick={()=>{
                    if(score<25) 
                    setScore(score+1)
                
                }}>Increment</button>
                <button onClick={()=>{
                    if(score>0)
                    setScore(score-1)                   
                }}>Decrement</button>
                <button onClick={()=>{
                    setScore(score=0)
                }}>   Reset   </button>
            </div>
            
        </div>
    )
}
export default App