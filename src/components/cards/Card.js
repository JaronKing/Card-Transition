import React from "react";
import { connect } from "react-redux";

const Card = ({ isExit, card, children }) => {
    return (
        <div className={`w-40 h-24 p-4 -mb-28 pt-6 mt-5 bg-gray-500 shadow-lg m-auto text-center text-3xl card 
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
