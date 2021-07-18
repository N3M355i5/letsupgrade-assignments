import React, { useState } from "react"
import Icon from "./Components/icon.js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Container, Card, CardBody, Row, Col } from 'reactstrap';
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

    const findWinner = () => {
        if(tiktacArray[0]== tiktacArray[1] && tiktacArray[0]==tiktacArray[2] && tiktacArray[0]!=""){
            setWinMessage(tiktacArray[0] )
         }
         else if(tiktacArray[3]== tiktacArray[4] && tiktacArray[3]==tiktacArray[5] && tiktacArray[3]!=""){
             setWinMessage(tiktacArray[3] )
         }
         else if(tiktacArray[6]== tiktacArray[7] && tiktacArray[6]==tiktacArray[8] && tiktacArray[6]!=""){
             setWinMessage(tiktacArray[6] )
         }
         else if(tiktacArray[0]== tiktacArray[3] && tiktacArray[0]==tiktacArray[6] && tiktacArray[0]){
             setWinMessage(tiktacArray[0] )
         }
         else if(tiktacArray[1]== tiktacArray[4] && tiktacArray[1]==tiktacArray[7] && tiktacArray[1]){
             setWinMessage(tiktacArray[1] )
         }
         else if(tiktacArray[2]== tiktacArray[5] && tiktacArray[2]==tiktacArray[8] && tiktacArray[2]){
             setWinMessage(tiktacArray[2] )
         }
         else if(tiktacArray[2]== tiktacArray[4] && tiktacArray[2]==tiktacArray[6] && tiktacArray[2]){
             setWinMessage(tiktacArray[2] )
         }
         else if(tiktacArray[0]== tiktacArray[4] && tiktacArray[0]==tiktacArray[8] && tiktacArray[0]){
             setWinMessage(tiktacArray[0] )
         }
    }

    const changeItem = (index) => {
        // var flag=0;
        // for(var i=0; i<9; i++) {
        //     if(tiktacArray[i]!="") {
        //         flag=1;
        //     }
        // }
        // if(flag==1) {
        //     toast("It's a Tie!", {type: "error"});
        //     <button onClick={playAgain}>Play Again</button>
        // }
        if(winMessage) {
            toast("Game has already got over!", {type:"success"});
        }
            if(tiktacArray[index] == "") {
            tiktacArray[index] = isCross ? "cross" : "circle"
            setIsCross(!isCross)
        }
        else {
            return toast("This is already occupied!", {type: "error"})
        }
        findWinner()
    }

    return (
        <div>
            <h1 className="headline">Tic Tac Toe</h1>
            <Container className = "p-5">
                <ToastContainer position="top-center"></ToastContainer>
                <Row>
                    <Col md={6} className="offset-md-3 ">
                        {
                            //to display winner message
                            winMessage? (
                                <div>
                                    <h1 className="text-center winMes">
                                         
                                         {winMessage} has won!! <br />
                                         
                                    </h1>
                                    {toast(winMessage+" has won!")}<br />
                                    <button onClick={playAgain}>Play Again</button>
                                </div>
                            ) : (
                                <h1 className="turn">
                                    {isCross ? "Player X Turn" : "Player O Turn"}
                                </h1>
                            )
                            
                        }
                        
                        <div className="grid"> 
                            {tiktacArray.map((value,index)=>(
                               <Card onClick={()=>changeItem(index)}> 
                               <CardBody className="box"> 
                                   <Icon choice={tiktacArray[index]}/>
                               </CardBody>
                           </Card>
                        ))}
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default App