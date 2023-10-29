import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Steam = ({ card, children }) => {
    const onHover = () => {
        console.log('hover');
    }

    const onLeave = () => {
        console.log('leave');
    }
    return (
        <div className="m-auto w-fit" onMouseEnter={onHover} onMouseLeave={onLeave}>
            <img id="image1" className="flex"  src="./images/zoltairMachine3.png"/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    card: state.card.card,
});

export default connect(mapStateToProps, null)(Steam);
