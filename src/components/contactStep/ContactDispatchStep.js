import React from "react";
import { connect } from "react-redux";
import Step from "./Step";
import StepButton from "../StepButton";

const ContactDispatchStep = ({ children }) => {
	return (
		<Step>
			<div className="flex flex-col">
				<img className="w-1/2 rounded-full overflow-hidden m-auto py-10" src="./images/phone.jpeg" alt="phone for contacting"/>
                <div>Phone:</div>
                <div className="pb-5">(760) 898 - 6275</div>
                <StepButton stepTemplate="Welcome">
                	Go Back
            	</StepButton>
            </div>
		</Step>
	)
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, null)(ContactDispatchStep);
