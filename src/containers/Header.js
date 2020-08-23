import React from "react";
import "./Header.css";

const Header = () => {
    const date = new Date();
    return (
        <div className="header">
            <p> {date.toDateString()}</p>
            <h1>My Notes</h1>
        </div>
    );
};

export default Header;