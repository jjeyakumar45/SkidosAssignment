import React from 'react';
import checkmark from '../assets/CheckMark.png';
import '../styles/featureItem.css';

export default class FeatureItem extends React.Component {

    render() {
        let text = this.props.text;
        return(
            <div className="featureItem">
                <img height="40px" width="40px" src={checkmark}></img>
                <span className="featureItemText">{text}</span>
            </div>
        )
    }
}