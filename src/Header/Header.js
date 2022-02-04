import React from "react";
import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="action-containers">
                <span className="material-icons" title="Help">
                    help_outline
                </span>
                <span className="material-icons-outlined" title="Hint">
                    lightbulb
                </span>
            </div>
            <h1 className="title">WORDLE</h1>
            <div className="action-containers">
                <span className="material-icons-outlined" title="Leaderboard">
                    leaderboard
                </span>
                <span className="material-icons" title="Settings">
                    settings
                </span>
            </div>
        </header>
    );
};

export default Header;
