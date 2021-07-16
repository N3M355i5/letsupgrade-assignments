import  React from "react"
import { FaTimes } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

const Icon = ({choice}) => {
    switch(choice) {
        case "cross" : return <FaTimes className="icon"/>;
        case "circle" : return <FaRegCircle className="icon"/>;
        default : return <FaPen className="icon"/>;
    }
}

export default Icon