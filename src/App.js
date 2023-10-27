import React from "react";
import { connect } from "react-redux";
import ContactSteps from "./components/ContactSteps"

function App() {
    return (
        <div className="relative">
            <header className="w-full text-2xl fixed">
                <div className="flex flex-row bg-red-200 m-auto max-w-7xl p-2 md:p-5 m-auto shadow-lg text-center">
                    <div>Software Idioms</div>
                </div>
            </header>
            
            <div className="max-w-7xl min-h-fit bg-amber-100 m-auto text-center flex flex-col text-3xl pt-32">
                <div className="p-10 text-7xl">Idioms</div>

            </div>

            
            
            <footer className="max-w-7xl m-auto bg-red-200 text-2xl p-2 md:p-5 flex flex-row">
                <img src="./images/towTruck.png" alt="logo" className="h-14 -mt-4 mx-2 md:mx-4"/>
                <div>Sacramento Towing Company</div>

            </footer>


        </div>
    );
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, null)(App);

