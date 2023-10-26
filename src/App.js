import React from "react";
import { connect } from "react-redux";
import ContactSteps from "./components/ContactSteps"

function App() {
    return (
        <div className="relative">
            <header className="max-w-7xl m-auto bg-red-300 text-2xl p-5 flex flex-row">
                <img src="./images/towTruck.png" alt="logo" className="h-14 -mt-4 mx-4"/>
                <div>Sacramento Towing Company</div>
            </header>
            
            <div className="max-w-7xl min-h-fit bg-blue-100 m-auto text-center flex flex-col text-3xl">
                <div className="p-10">Live Dispatch Ready</div>

                <div className="bg-gray-100 shadow-lg min-h-96 mx-10 mt-10 grid md:grid-cols-1 md:grid-cols-2 rounded-t-xl overflow-hidden">
                    <ContactSteps/>
                    <div className="col-start-2" style={{backgroundImage: `url("./images/sacramentoMapArea.png")`}}></div>
                    
                    <div className="flex flex-col p-5 col-start-1 hidden">
                        <div className="mb-5">
                            Enter Address (Google Suggestion):
                        </div>
                        <input className="text-3xl text-center p-5 rounded-lg border-2 border-gray-200" type="text"/>
                        <div className="p-5">Or</div> 
                        <button className="bg-blue-200 hover:bg-blue-300 p-5 m-5 rounded-lg text-3xl">
                            Get My Location
                        </button>

                        <div>Phone:</div>
                        <input className="text-center p-5 m-2 rounded-lg border-2 border-gray-200"/>
                        <button className="bg-blue-200 hover:bg-blue-300 p-5 m-2 rounded-lg">Have Dispatch Call You</button>
                    </div>
                </div>
            </div>
            
            <div className="max-w-7xl m-auto bg-red-300 text-2xl p-5 flex flex-row">
                <img src="./images/towTruck.png" alt="logo" className="h-14 -mt-4 mx-4"/>
                <div>Sacramento Towing Company</div>
            </div>


        </div>
    );
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, null)(App);

