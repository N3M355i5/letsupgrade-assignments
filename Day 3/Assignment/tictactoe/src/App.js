import React, { useState } from "react"
import Icon from "./Components/icon.js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Container, Card, CardBody, Row, Column } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css"

const tiktacArray = Array(9).fill("");
const App = () => {
    let [isCross, setIsCross] = useState(true)
    let [winMessage, setWinMessage] = useState("")

    const playAgain = () => {
        setIsCross(true)
        setWinMessage("")
        tiktacArray.fill("");
    }

    const findWinner = (index) => {
        if(tiktacArray[0]== tiktacArray[1] && tiktacArray[0]==tiktacArray[2] && tiktacArray[0]!=""){
            setWinMessage(tiktacArray[0]+" has won")
         }
         else if(tiktacArray[3]== tiktacArray[4] && tiktacArray[3]==tiktacArray[5] && tiktacArray[3]!=""){
             setWinMessage(tiktacArray[3]+" has won")
         }
         else if(tiktacArray[6]== tiktacArray[7] && tiktacArray[6]==tiktacArray[8] && tiktacArray[6]!=""){
             setWinMessage(tiktacArray[6]+" has won")
         }
         else if(tiktacArray[0]== tiktacArray[3] && tiktacArray[0]==tiktacArray[6] && tiktacArray[0]){
             setWinMessage(tiktacArray[0]+" has won")
         }
         else if(tiktacArray[1]== tiktacArray[4] && tiktacArray[1]==tiktacArray[7] && tiktacArray[1]){
             setWinMessage(tiktacArray[1]+" has won")
         }
         else if(tiktacArray[2]== tiktacArray[5] && tiktacArray[2]==tiktacArray[8] && tiktacArray[2]){
             setWinMessage(tiktacArray[2]+" has won")
         }
         else if(tiktacArray[2]== tiktacArray[4] && tiktacArray[2]==tiktacArray[6] && tiktacArray[2]){
             setWinMessage(tiktacArray[2]+" has won")
         }
         else if(tiktacArray[0]== tiktacArray[4] && tiktacArray[0]==tiktacArray[8] && tiktacArray[0]){
             setWinMessage(tiktacArray[0]+" has won")
         }
    }

    const changeItem = (index) => {
        if(winMessage) {
            toast("Game has already got over!", {type:"success"})
        if(tiktacArray[index] == "") {
            tiktacArray[index] = isCross ? "cross" : "circle"
            setIsCross(!isCross)
        }
        else {
            return toast("This already occupied!", {type: "error"})
        }
        }
    }

    return (
        <div>
            <Container class>

            </Container>
        </div>
    )
}

export default App