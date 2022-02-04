import "./App.scss";
import React from "react";
import Header from "./Header/Header";
import KeyBoard from "./KeyBoard/KeyBoard";
import Board from "./Board/Board";

function App() {
    return (
        <main className="app">
            <Header />
            <Board />
            <KeyBoard />
        </main>
    );
}

export default App;
