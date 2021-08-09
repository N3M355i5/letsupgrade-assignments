import React, { useState } from "react"
import "./style.css"
import NavBar from "./Components/Navbar"
import HeroSection from "./Components/HeroSection"
import FeatureSection from "./Components/FeatureSection"
import CardSection from "./Components/CardSection"
import FooterSection from "./Components/FooterSection"

const App = () => {
    return (
        <div>
            <NavBar/>
            <HeroSection/>
            <FeatureSection/>
            {/* <CardSection/> */}
            <FooterSection/>
        </div>
    )
}

export default App