import React from "react";
import { connect } from 'react-redux';
import { changeCard } from '../store/Actions';

const CardButton = ({
    children, 
    color = "blue", 
    stepTemplate = "Welcome", 
    doChangeCard
}) => {
    const handleChangeStep = () => {
        doChangeCard(stepTemplate);
    };
    const colorOptions = (color) => {
        switch (color) {
             case "yellow":
                return "bg-yellow-600 hover:bg-yellow-700"
            case "gray":
                return "bg-gray-600 hover:bg-gray-700"
            case "orange":
                return "bg-orange-700 hover:bg-orange-800"
            case "blue":
                return "bg-blue-200 hover:bg-blue-300"
            case "red":
                return "bg-red-400 hover:bg-red-500"
            case "green":
                return "bg-green-600 hover:bg-green-700"
            default:
                return "bg-blue-200 hover:bg-blue-300";
        }
    }

    return (
        <button onClick={handleChangeStep} className={`p-5 m-2 rounded-lg bottom-0 right-0 absolute ${colorOptions(color)}`}>
            {children}
        </button>
    );
}

const mapDispatchToProps = (dispatch) => ({
    doChangeCard: step => dispatch(changeCard(step))
})

export default connect(null, mapDispatchToProps)(CardButton);
