import React, { useState } from "react";
import "./App.css";
import PayPal from "./components/PayPal";

function App() {
  const [checkout, setCheckOut] = useState(false);

  return (
    <div className="App">
      {checkout ? (
        <PayPal />
      ) : (
        <button
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Checkout
          <h1>Smart Parking</h1>
        </button>
      )}
    </div>
  );
}

export default App;
