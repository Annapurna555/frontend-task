import React from 'react';
import './App.css';
import {PaginationButtons} from "./components/PaginationButtons/PaginationButtons";
import {Route, Routes} from "react-router-dom";
import Details from "./components/Details/Details";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<PaginationButtons/>}/>
                <Route path={"/details/:name"} element={<Details/>}/>
            </Routes>
        </div>
    );
}

export default App;