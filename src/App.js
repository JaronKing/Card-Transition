import React from "react";
import { connect } from "react-redux";
import ContactSteps from "./components/ContactSteps"

function App() {
    return (
        <div className="relative">
            <header className="max-w-7xl m-auto bg-red-200 text-2xl p-2 md:p-5 flex flex-row">
                <img src="./images/towTruck.png" alt="logo" className="h-14 -mt-4 mx-2 md:mx-4"/>
                <div>Sacramento Towing Company</div>
            </header>
            
            <div className="max-w-7xl min-h-fit bg-orange-400/50 m-auto text-center flex flex-col text-3xl">
                <div className="p-10 text-7xl">Live Dispatch Ready</div>

                <div className="bg-gray-100 shadow-t-lg min-h-96 mx-2 md:mx-10 mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-2 rounded-t-xl overflow-hidden">
                    <ContactSteps/>
                    <div className="col-start-2" style={{backgroundImage: `url("./images/sacramentoMapArea.png")`}}></div>
                </div>
            </div>

            <div className="max-w-7xl m-auto bg-red-100 text-3xl text-center p-10">
                <div className="pb-10 text-7xl">What we do</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        Towing in Sacramento and the surrounding areas.
                    </div>
                    <div>
                        Help you get back into your car if the keys are inside.
                    </div>
                    <div>
                        Out of gas, we can help you get some.
                    </div>
                    <div>
                        Flat Tire, lets us help you put on the spare or inflate the flat tire to get you
                        to where you need to go.
                    </div>
                    <div>
                        Dead battery?  Let use give you a jump.
                    </div>
                    <div>
                        Some other issue, we can help, call us.
                    </div>
                </div>
            </div>

            <div className="max-w-7xl m-auto bg-blue-100 h-32 text-3xl text-center p-10">
                <div className="text-7xl">About Us</div>
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

