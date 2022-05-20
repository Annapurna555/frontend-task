import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {DetailsErrorBoundary} from "./components/Details/Details";
import {FavouriteList} from "./components/FavouriteList/FavouriteList";
import {NotFound} from "./components/NotFound/NotFound";
import {FullList} from "./components/ListOfCharcters/ListOfCharcters";
import {Home} from "./components/Home/Home";

function App() {
    return (
        <>
            <div id={"modal"}></div>
            <div className="App">
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/characters"} element={<FullList/>}/>
                    <Route path={"/details"} element={<DetailsErrorBoundary/>}/>
                    <Route path={"/favouriteList"} element={<FavouriteList/>}/>
                    <Route path={"*"} element={<NotFound/>}/>

                </Routes>
            </div>
        </>
    );
}

export default App;