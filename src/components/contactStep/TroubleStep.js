import React from "react";
import { connect } from "react-redux";
import Step from "./Step";
import StepButton from "../StepButton";

const WelcomeStep = ({ children }) => {
    return (
        <Step>
            <div className="flex flex-col p-5 col-start-1">
                <div className="m-5">Type of Car trouble:</div>
                <StepButton>Need a Jump</StepButton>
                <StepButton>Flat Tire</StepButton>
                <StepButton>Tow</StepButton>
                <StepButton>Out Of Gas</StepButton>
                <StepButton>Other</StepButton>
            </div>
        </Step>
    )
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, null)(WelcomeStep);
