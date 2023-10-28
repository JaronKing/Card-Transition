import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import ButtonCard from "../ButtonCard";

const FirstCard = ({ children }) => {
    return (
        <Card>
            <div className="flex flex-col">
                PhP
                <ButtonCard stepTemplate="Second">
                    Next
                </ButtonCard>
            </div>
        </Card>
    )
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, null)(FirstCard);
