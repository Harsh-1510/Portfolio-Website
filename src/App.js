import React from "react";
import NavBar from "./Pages/NavBar";
import Home from "./Pages/Homescreen/index";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const App = () => {
    return (
    <>
        <Router>
            <div>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="*" element={<div>404 Not Found</div>}></Route>
                </Routes>
            </div>
        </Router>
    </>);
};

export default App;
