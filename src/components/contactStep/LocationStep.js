import React from "react";
import { connect } from "react-redux";
import Step from "./Step";
import StepButton from "../StepButton";

const LocationStep = ({ children }) => {
    return (
        <Step>
            <div className="flex flex-col">
                <div className="my-5">
                    Enter Address:
                </div>
                <input className="text-3xl text-center p-5 rounded-lg border-2 border-gray-200 m-3" type="text"/>
                <div className="p-5">Or</div> 
                <StepButton>Get My Location</StepButton>
                <StepButton>Continue</StepButton>
                <StepButton>Go Back</StepButton>
            </div>
        </Step>
    )
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, null)(LocationStep);
