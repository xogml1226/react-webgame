import React from "react";
import { BrowserRouter, HashRouter, Route, Link, Routes } from "react-router-dom";
import GameMatcher from "./GameMatcher";

const Games = () => {

    return (
        <BrowserRouter>
            <div>
                <Link to='/game/number-baseball?query=10&hello=xogml'>숫자야구</Link>
                &nbsp;
                <Link to='/game/rock-scissors-paper'>가위바위보</Link>
                &nbsp;
                <Link to='/game/lotto-generator'>로또</Link>
                &nbsp;
                <Link to='/game/index'>Game Matcher</Link>
            </div>
            <div>
                <Routes>
                    <Route path="*" end element={<GameMatcher />} />
                    <Route path="/game/:name" element={<GameMatcher />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default Games;