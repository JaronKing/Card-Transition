import React from "react";
import { connect } from "react-redux";
import WelcomeStep from "./contactStep/WelcomeStep";
import TroubleStep from "./contactStep/TroubleStep";
import ContactDispatchStep from "./contactStep/ContactDispatchStep";
import OtherStep from "./contactStep/OtherStep";
import LocationStep from "./contactStep/LocationStep";

const ContactSteps = ({	step, children }) => {
	return (
		<>
			{step === 'Welcome' && ( <WelcomeStep /> )}
            {step === 'ContactDispatch' && ( <ContactDispatchStep /> )}
			{step === 'Trouble' && ( <TroubleStep /> )}
			{step === 'Other' && ( <OtherStep /> )}
			{step === 'Location' && ( <LocationStep /> )}
		</>
	)
}

const mapStateToProps = (state) => ({
	step: state.contact.step,
});

export default connect(mapStateToProps, null)(ContactSteps);
