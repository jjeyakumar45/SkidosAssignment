import React from "react";
import bannerBackground from '../assets/banner_bg.png';
import bannerPic from '../assets/banner_picture.png';
import '../styles/banner.css';

export default class Banner extends React.Component{
    render() {
        return(
            <div className="bannerContainer">
                <img id="bannerBG" src={bannerBackground}></img>
                <div className="bannerContent">
                    <div className="bannerTextContent">
                        <h1 id="bannerHeading">Discover a fun way of learning for kids</h1>
                        <p id="bannerPara">Experience over 45 safe and ad-free mobile games for 2-11 year old kids</p>
                        <button id="tryFreeBtn">Try for Free</button>
                    </div>
                    <div className="bannerImage">
                        <img src={bannerPic}></img>
                    </div>
                </div>
            </div>
        )
    }
}