import React from "react";
import { connect } from "react-redux";
import Step from "./Step";
import StepButton from "../StepButton";

const WelcomeStep = ({ children }) => {
	return (
		<Step>
			<div className="flex flex-col px-5 py-32">
                <StepButton stepTemplate="Trouble">
                	Need Immediate Assistance
            	</StepButton>
                <StepButton stepTemplate="ContactDispatch">
                	Call Dispatch Instead
            	</StepButton>
            </div>
		</Step>
	)
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, null)(WelcomeStep);
