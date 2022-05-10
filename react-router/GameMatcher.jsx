import React, { Component } from "react";
import { Route, Routes } from "react-router";
import NumberBaseball from '../2.숫자야구/NumberBaseball';
import RSP from '../4.가위바위보/RSP-class';
import Lotto from '../5.로또/Lotto-class';

class GameMatcher extends Component {
    render() {
        // const location = useLocation();
        // const navigate = useNavigate();
        // let urlSearchParams = new URLSearchParams(this.props.location.search.slice(1));
        // console.log(urlSearchParams.get('hello'));
        return (
            <Routes>
                <Route path="number-baseball" element={<NumberBaseball />} />
                <Route path="rock-scissors-paper" element={<RSP />} />
                <Route path="lotto-generator" element={<Lotto />} />
                <Route path="*" element={
                    <div>
                        일치하는 게임이 없습니다.
                    </div>
                } />
            </Routes>
        );
    }
}

export default GameMatcher;