import React from "react";
import '../styles/dropdown.css';

export default class DropDown extends React.Component{
    render() {
        return (
            <div>
                <label id="languagelbl" for="language">Language : </label>

                <select id="language">
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="German">German</option>
                </select>
            </div>
        )
    }
}