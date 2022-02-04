import React, { useEffect, useRef, useState } from "react";
// import { throttle } from "../utils";
import "./Board.scss";

const Board = () => {
    const boardContainerRef = useRef();
    const [boardDimension, setBoardDimensions] = useState({});

    const board_size = function () {
        let e = boardContainerRef.current,
            a = Math.min(Math.floor(e.clientHeight * (5 / 6)), 350),
            s = 6 * Math.floor(a / 5);
        setBoardDimensions({ width: a + "px", height: s + "px" });
    };

    useEffect(() => {
        board_size();
        let resizeObserver = new ResizeObserver(() => {
            board_size();
        });

        resizeObserver.observe(boardContainerRef.current);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <section className="board-container" ref={boardContainerRef}>
            <div className="board" style={boardDimension}>
                <div className="row">
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                </div>
                <div className="row">
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                </div>
                <div className="row">
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                </div>
                <div className="row">
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                </div>
                <div className="row">
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                </div>
                <div className="row">
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                    <div className="tile"></div>
                </div>
            </div>
        </section>
    );
};

export default Board;
