import React from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import { store } from "./sotre";
import "./App.css";
import { setMoney } from "./actions";

const App = () => {
  const { quantity, name } = store.getState();

  return (
    <div className="App">
      <img className="App__userpic" src={photographer} alt="user" />
      <p className="App__username">Hello, {name}! </p>
      <div className="App__amount">
        {formatNumber({ prefix: "$" })(quantity)}
        <p className="App__amount--info">Total Amount</p>
      </div>

      <section className="App__buttons">
        <button data-amount="10000" onClick={changeMoney}>
          WITHDRAW $10,000
        </button>
        <button data-amount="5000" onClick={changeMoney}>
          WITHDRAW $5,000
        </button>
      </section>

      <p className="App__giveaway">Give away all your cash to charity</p>
    </div>
  );
};

function changeMoney(e) {
  store.dispatch(setMoney(e.target.dataset.amount));
}

export default App;
