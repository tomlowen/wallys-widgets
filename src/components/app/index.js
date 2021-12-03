import "./App.css";
import { useState } from "react";
import packCalculator from "../../models/packCalculator";

function App() {
  const [orderSize, setOrderSize] = useState(0);
  const [fulfillment, setFulfillment] = useState();

  return (
    <div className="App">
      <div id="orderInput">
        <input
          type="number"
          placeholder="order size"
          onChange={(e) => setOrderSize(e.target.value)}
        />
        <button onClick={() => setFulfillment(packCalculator(orderSize))}>
          Calculate order bundles
        </button>
      </div>
      <div id="fulfillmentDisplay">
        {fulfillment && (
          <table id="table">
            <tbody>
              <tr>
                <th>Pack size</th>
                <th>Volume</th>
              </tr>
              {Object.keys(fulfillment).map((key) => (
                <tr>
                  <th>{key}</th>
                  <th>{fulfillment[key]}</th>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
