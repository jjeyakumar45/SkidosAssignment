import React from "react";
import logo from "../assets/skidos-logo.png";
import DropDown from "./dropdown";
import '../styles/header.css';

export default class Header extends React.Component{
    render() {
        return (
            <div className="header">
                <img id = "logo" src={logo}></img>
                <div className="header-right">
                    <DropDown />
                    <button id="login-btn">Login</button>
                </div>
            </div>
        )
    }
}