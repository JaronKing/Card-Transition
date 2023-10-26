import React from "react";
import { connect } from "react-redux";
import WelcomeStep from "./contactStep/WelcomeStep";
import TroubleStep from "./contactStep/TroubleStep";
import ContactDispatch from "./contactStep/ContactDispatch";

const ContactSteps = ({	step, children }) => {
	return (
		<>
			{step === 'Welcome' && ( <WelcomeStep /> )}
            {step === 'ContactDispatch' && ( <ContactDispatch /> )}
			{step === 'Trouble' && ( <TroubleStep /> )}
		</>
	)
}

const mapStateToProps = (state) => ({
	step: state.contact.step,
});

export default connect(mapStateToProps, null)(ContactSteps);
