import React from "react";
import { connect } from "react-redux";
import WelcomeCard from "./cards/WelcomeCard";
import FirstCard from "./cards/FirstCard";
import SecondCard from "./cards/SecondCard";

const Cards = ({ card, children }) => {
    return (
        <>
            {card === 'Welcome' && ( <WelcomeCard /> )}
            {card === 'First' && ( <FirstCard /> )}
            {card === 'Second' && ( <SecondCard /> )}
        </>
    )
}

const mapStateToProps = (state) => ({
    card: state.card.card,
});

export default connect(mapStateToProps, null)(Cards);
