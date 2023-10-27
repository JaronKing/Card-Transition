import React from "react";
import { connect } from "react-redux";
import Step from "./Step";
import StepButton from "../StepButton";

const WelcomeStep = ({ children }) => {
    return (
        <Step>
            <div className="flex flex-col p-5 col-start-1">
                <div className="m-5">Other issue:</div>
                <textarea className="p-2 m-2 rounded-lg border-2 border-gray-200" type="textarea" rows="5" placeholder="Write your issue here..."/>
                <StepButton stepTemplate="Location">Continue</StepButton>
            </div>
        </Step>
    )
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, null)(WelcomeStep);
