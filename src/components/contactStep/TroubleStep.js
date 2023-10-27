import React from "react";
import { connect } from "react-redux";
import Step from "./Step";
import StepButton from "../StepButton";

const WelcomeStep = ({ children }) => {
    return (
        <Step>
            <div className="flex flex-col">
                <div className="m-5">Type of Car trouble:</div>
                <StepButton stepTemplate="Location">Need a Jump</StepButton>
                <StepButton stepTemplate="Location">Flat Tire</StepButton>
                <StepButton stepTemplate="Location">Tow</StepButton>
                <StepButton stepTemplate="Location">Out Of Gas</StepButton>
                <StepButton stepTemplate="Location">Locked Keys In Car</StepButton>
                <StepButton stepTemplate="Other">Other</StepButton>
            </div>
        </Step>
    )
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, null)(WelcomeStep);
