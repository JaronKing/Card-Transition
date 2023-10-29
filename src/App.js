import React from "react";
import { connect } from "react-redux";
import Cards from "./components/Cards";
import Steam from "./components/Steam";

function App() {
    return (
        <div className="bg-stone-300 h-screen mt-0">
            <Cards/>
            <Steam/>
            <div className="bg-black h-36 max-w-xs m-auto card">

            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, null)(App);

