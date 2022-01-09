import React from "react";
import '../styles/whyskidos.css';

export default class WhySkidos extends React.Component{
    render() {
        return (
            <div>
                <div>
                    <h1>Why SKIDOS</h1>
                </div> 
                <div className="aboutUsContainer">
                    <iframe id="aboutUsVideo" width="560" height="315"
                        src="https://www.youtube.com/embed/9OVRhJm24zY" />
                    <div className="aboutUsText">
                        <p>
                            At SKIDOS, we are on a mission to help kids grow into confident lifelong learners. 
                            This is why our learning apps support them in strengthening their academic skills, 
                            as well as developing 21st century skills, fundamental for a succesful future.
                        </p>
                        <p>
                            We have carefully selected only high quality games loved by kids & included them 
                            in our SKIDOS Pass, that gives your child unlimited access to fun learning. We 
                            add new games every month to satisfy every taste, so you won't have to worry 
                            about the quality of your kid's screen time anymore.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}