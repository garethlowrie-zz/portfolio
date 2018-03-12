import React from "react"
import { ParallaxProvider } from 'react-scroll-parallax';
import Home from "../Home/Home";

export default () => ( 
    <ParallaxProvider>
        <Home />
    </ParallaxProvider>
)