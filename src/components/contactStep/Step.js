import React from "react";
import { connect } from "react-redux";

const Step = ({ isExit, children }) => {
	return (
		<div className={`col-start-1 col-span-1 rounded-xl shadow-xl m-5 bg-gray-200
		 	contact-step ${isExit ? "swipe-out": ""}`}>
			{ children }
		</div>	
	)
}

const mapStateToProps = (state) => ({
	isExit: state.contact.isExit,
});

export default connect(mapStateToProps, null)(Step);
