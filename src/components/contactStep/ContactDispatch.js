import React from "react";
import { connect } from "react-redux";
import Step from "./Step";
import StepButton from "../StepButton";

const ContactDispatch = ({ children }) => {
	return (
		<Step>
			<div className="flex flex-col px-5 py-32">
                <div>Phone:</div>
                <div>(760) 898 - 6275</div>
                <StepButton stepTemplate="Welcome">
                	Go Back
            	</StepButton>
            </div>
		</Step>
	)
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, null)(ContactDispatch);
