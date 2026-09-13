import { useState } from "react";
import "./App.css";
function App() {
    const [count, setCount] = useState(0);
    const [addValue, setAddValue] = useState(1);
    const [minusVAlue, setMinusVAlue] = useState(1);

    const incretment = () => {
        setCount(count + addValue);
    };
    const decrement = () => {
        setCount(count - minusVAlue);
    };
    const reset = () => {};
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginTop: "20px",
            }}
        >
            <span>{count}</span>
            <button
                style={{
                    backgroundColor: "blue",
                    color: "white",
                    border: "none",
                }}
                onClick={incretment}
                className="border p-1 px-4 rounded-2xl"
            >
                +
            </button>
            <button
                style={{
                    backgroundColor: "blue",
                    color: "white",
                    border: "none",
                }}
                onClick={decrement}
                className="border p-1 px-4 rounded-2xl"
            >
                -
            </button>
            <button
                style={{
                    backgroundColor: "blue",
                    color: "white",
                    border: "none",
                }}
                onClick={incretment}
                className="border p-1 px-4 rounded-2xl"
            >
                reset
            </button>
        </div>
    );
}
export default App;
