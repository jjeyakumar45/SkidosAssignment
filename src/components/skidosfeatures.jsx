import React from "react";
import FeatureItem from "./featureItem";
import '../styles/skidosfeatures.css';
import character from '../assets/char1.png';

export default class SkidosFeatures extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Let kids learn on their own with meaningful screen time</h1>
                </div>
                <div className="featuresContainer">
                    <div className="featuresColumn">
                        <FeatureItem text="Practice math & develop 21st century skills"/>
                        <FeatureItem text="Safe and ad-free online environment"/>
                        <FeatureItem text="Perfect for kids aged 2-11 years old" />
                    </div>
                    <div className="featuresColumn">
                        <FeatureItem text="A huge variety of games for every taste"/>
                        <FeatureItem text="Content personalized to your child's age & interests"/>
                        <FeatureItem text="4+ million kids playing" />
                    </div>
                    <div>
                        <img src={character}></img>
                    </div>
                </div>
            </div>
        )
    }
}