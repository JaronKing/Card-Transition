

function App() {
    return (
        <div className="relative">
            <header className="max-w-7xl m-auto bg-blue-400 text-2xl p-5">
                Sacramento Towing Company
            </header>
            
            <div className="max-w-7xl min-h-fit bg-yellow-100 m-auto text-center flex flex-col text-3xl">
                <div className="p-10">Live Dispatch Ready</div>

                <div className="bg-gray-200/50 min-h-96 mx-10 mt-10 grid md:grid-cols-1 md:grid-cols-2 gap-5 rounded-t-xl overflow-hidden">
                    <div className="flex flex-col px-5 py-32 col-start-1">
                        <button className="bg-blue-200 hover:bg-blue-300 p-5 m-2 rounded-lg">Need Immediate Assistance</button>
                        <button className="bg-blue-200 hover:bg-blue-300 p-5 m-2 rounded-lg">Call Dispatch Instead</button>
                    </div>
                    <div className="" style={{backgroundImage: `url("./images/sacramentoMapArea.png")`}}></div>
                    <div className="flex flex-col p-5 col-start-1 hidden">
                        <div className="m-5">Type of Car trouble:</div>
                        <button className="bg-blue-200 hover:bg-blue-300 p-5 m-2 rounded-lg">Need a Jump</button>
                        <button className="bg-blue-200 hover:bg-blue-300 p-5 m-2 rounded-lg">Flat Tire</button>
                        <button className="bg-blue-200 hover:bg-blue-300 p-5 m-2 rounded-lg">Tow</button>
                        <button className="bg-blue-200 hover:bg-blue-300 p-5 m-2 rounded-lg">Out Of Gas</button>
                        <button className="bg-blue-200 hover:bg-blue-300 p-5 m-2 rounded-lg">Other</button>
                    </div>
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
            
            <div className="max-w-7xl m-auto bg-blue-400 text-2xl p-5">
                Sacramento Towing Company
            </div>


        </div>
    );
}

export default App;
