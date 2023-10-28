import React from "react";
import { connect } from "react-redux";

const Card = ({ isExit, card, children }) => {
    return (
        <div className={`max-w-5xl h-96 bg-stone-300 m-auto text-center text-3xl card 
                ${isExit ? "leave": 
                    card !== "Welcome"? "enter" : ""
                }
            `}>
            { children }
        </div>  
    )
}

const mapStateToProps = (state) => ({
    isExit: state.card.isExit,
    card: state.card.card,
});

export default connect(mapStateToProps, null)(Card);
