import React from 'react';
import './App.css';
import {PaginationButtons} from "./components/PaginationButtons/PaginationButtons";
import {Route, Routes} from "react-router-dom";
import Details from "./components/Details/Details";
import {FavouriteList} from "./components/FavouriteList/FavouriteList";
import {NavBar} from "./components/NavBar/NavBar";

function App() {
    return (
        <>
            <div id={"modal"}></div>
            <div className="App">
                <NavBar/>
                <Routes>
                    <Route path={"/"} element={<PaginationButtons/>}/>
                    <Route path={"/details/:name"} element={<Details/>}/>
                    <Route path={"/favouriteList"} element={<FavouriteList/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;