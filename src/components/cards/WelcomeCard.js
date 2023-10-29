import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

const WelcomeCard = ({ children }) => {
    return (
        <Card>
            <div className="flex flex-col font-bold">
                Open
            </div>
        </Card>
    )
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, null)(WelcomeCard);
