import React from "react";
import { connect } from "react-redux";
import Cards from "./components/Cards";

function App() {
    return (
        <div className="relative">
            <header className="w-full text-2xl">
                <div className="flex flex-row bg-gray-200 m-auto max-w-5xl p-2 md:p-5 m-auto shadow-lg text-center">
                    <div>Software Idioms</div>
                </div>
            </header>
            
            <Cards/>

        </div>
    );
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, null)(App);

