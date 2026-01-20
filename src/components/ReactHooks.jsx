import { useState, useEffect } from "react";

function ReactHooks() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Test");

    // Runs after each render
    useEffect(() => {
        document.title = `${count}`;
    });

    // Runs only once when the page loads
    useEffect(() => {
        setName("Salman");
    }, []);

    // Runs when count changes
    useEffect(() => {
        if (count > 10) {
            setName("Sayma");
        } else if (count > 5) {
            setName("Sayed");
        }else if (count > 0) {
            setName("SaymaSayed");
        }
    }, [count]);


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
                <h1 className="text-3xl font-bold text-blue-600 mb-4">{name}</h1>
                <p className="text-xl font-medium text-gray-700 mb-6">Count: <span className="text-blue-600">{count}</span></p>
                <div className="flex flex-wrap justify-center gap-4">
                    <button onClick={() => setCount(count + 1)} className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">Add</button>
                    <button onClick={() => setCount(count - 1)} className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">Minus</button>
                    <button onClick={() => setCount(0)} className="px-6 py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 transition-colors">Reset</button>
                </div>
            </div>
        </div>
    );
}

export default ReactHooks;