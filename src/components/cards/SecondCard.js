import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import ButtonCard from "../ButtonCard";

const SecondCard = ({ children }) => {
    return (
        <Card>
            <div className="flex flex-col">
                Javascript
                <ButtonCard stepTemplate="First">
                    Next
                </ButtonCard>
            </div>
        </Card>
    )
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, null)(SecondCard);
