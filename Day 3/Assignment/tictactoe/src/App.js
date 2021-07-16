import React, { useState } from "react"
import Icon from "./Components/icon.js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css"

const tictakArray = Array(9).fill("");
const App = () => {
    let [isCross, setIsCross] = useState(true)
    let [winMessage, setWinMessage] = useState("")

    const playAgain = () => {
        setIsCross(true)
        setWinMessage("")
        tictakArray.fill("");
    }

    const findWinner = () => {
        if(tictakArray[0] == tictakArray[1] == tictakArray[2] == "X") {
            setWinMessage("Winner is X")
        }
        if(tictakArray[0] == tictakArray[1] == tictakArray[2] == "O") {
            setWinMessage("Winner is O")
        }
        if(tictakArray[3] == tictakArray[4] == tictakArray[5] == "X") {
            setWinMessage("Winner is X")
        }
        if(tictakArray[3] == tictakArray[4] == tictakArray[5] == "O") {
            setWinMessage("Winner is O")
        }
        if(tictakArray[6] == tictakArray[7] == tictakArray[8] == "X") {
            setWinMessage("Winner is X")
        }
        if(tictakArray[6] == tictakArray[7] == tictakArray[8] == "O") {
            setWinMessage("Winner is O")
        }
        if(tictakArray[0] == tictakArray[3] == tictakArray[6] == "X") {
            setWinMessage("Winner is X")
        }
        if(tictakArray[0] == tictakArray[3] == tictakArray[6] == "O") {
            setWinMessage("Winner is O")
        }
        if(tictakArray[1] == tictakArray[4] == tictakArray[7] == "X") {
            setWinMessage("Winner is X")
        }
        if(tictakArray[1] == tictakArray[4] == tictakArray[7] == "O") {
            setWinMessage("Winner is O")
        }
        if(tictakArray[2] == tictakArray[5] == tictakArray[8] == "X") {
            setWinMessage("Winner is X")
        }
        if(tictakArray[2] == tictakArray[5] == tictakArray[8] == "O") {
            setWinMessage("Winner is O")
        }
        if(tictakArray[0] == tictakArray[4] == tictakArray[8] == "X") {
            setWinMessage("Winner is X")
        }
        if(tictakArray[2] == tictakArray[4] == tictakArray[8] == "O") {
            setWinMessage("Winner is O")
        }
        if(tictakArray[2] == tictakArray[4] == tictakArray[6] == "X") {
            setWinMessage("Winner is X")
        }
        if(tictakArray[2] == tictakArray[4] == tictakArray[6] == "O") {
            setWinMessage("Winner is O")
        }

    }

    return (
        <div>
            <h1><Icon choice="circle"/></h1>
        </div>
    )
}

export default App