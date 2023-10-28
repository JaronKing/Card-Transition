import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import ButtonCard from "../ButtonCard";

const WelcomeCard = ({ children }) => {
    return (
        <Card>
            <div className="flex flex-col">
                Idioms
                <ButtonCard stepTemplate="First">
                    Next
                </ButtonCard>
            </div>
        </Card>
    )
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, null)(WelcomeCard);
