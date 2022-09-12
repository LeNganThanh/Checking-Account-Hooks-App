import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const initialBalance = Number(localStorage.getItem("balance")) || 0;

  const [balance, setBalance] = useState(initialBalance);
  const [deposit, setDeposit] = useState("");
  const [withdrawal, setWithdrawal] = useState("");

  //useEffect for localStorage balance
  /*   useEffect(() => {
    const storageBalance = Number(localStorage.getItem("balance"));
    if (storageBalance) {
      setBalance(storageBalance);
    }
  }, [balance]); */

  //setting useEffect for localStorage
  useEffect(() => {
    localStorage.setItem("balance", balance);
  }, [balance]);

  //update deposit value - checking if given number is a number
  const updateDeposit = e => {
    if (isNaN(e.target.value)) {
      alert("The given value should be number");
      setDeposit("");
    } else setDeposit(e.target.value);
  };

  //update withdrawal value - checking if given number is a number
  const updateWithdrawal = e => {
    if (isNaN(e.target.value)) {
      alert("The given value should be number");
      setWithdrawal("");
    } else setWithdrawal(e.target.value);
  };

  //button Deposit get click then the balance should be updated
  const getDeposit = () => {
    setBalance(balance => Number(balance) + parseInt(deposit));
    setDeposit("");
  };

  //button Withdrawal get click then the balance should be updated
  const getWithdrawal = () => {
    setBalance(balance => Number(balance) - parseInt(withdrawal));
    setWithdrawal("");
  };

  //Printout the Bank details
  return (
    <div className="container">
      <h1>Banking Account</h1>
      <h2>Actual Balance: {balance.toLocaleString()}€</h2>
      <div>
        <div>
          <input value={deposit} onChange={updateDeposit} />
          <button onClick={getDeposit}>Deposit</button>
        </div>
        <div>
          <input value={withdrawal} onChange={updateWithdrawal} />
          <button onClick={getWithdrawal}>Withdrawals</button>
        </div>
      </div>
    </div>
  );
}

export default App;

/* solution
function App() {
  // const initialBalance = Number(localStorage.getItem('balance')) || 0;
  // const [balance, setBalance] = useState(initialBalance);
  const [balance, setBalance] = useState(0);
  const [depositStr, setDepositStr] = useState(0);
  const [withdrawalStr, setWithdrawalStr] = useState(0);

  // on mount, retrieve the balance from localStorage
  useEffect(() => {
    const storageBalance = localStorage.getItem('balance');
    if (storageBalance) {
      setBalance(parseInt(storageBalance));
    }
  }, []); // to ensure that useEffect runs only after the first render

  useEffect(() => {
    localStorage.setItem('balance', balance);
  }, [balance]) // whenever balance changes, this effect will be executed

  function updateDepositStr(e) {
    setDepositStr(e.target.value);
  }

  function updateWithdrawalStr(e) {
    setWithdrawalStr(e.target.value);
  }

  function deposit() {
    setBalance(balance => balance + parseInt(depositStr));
    setDepositStr(0);
  }

  function withdraw() {
    setBalance(balance => balance - parseInt(withdrawalStr));
    setWithdrawalStr(0);
  }
  return (
    <div className="App">
      <h1>Your current balance is {balance}</h1>
      <div>
        <input onChange={updateDepositStr} value={depositStr}/>
        <button onClick={deposit}>Deposit</button>
      </div>
      <div>
        <input onChange={updateWithdrawalStr} value={withdrawalStr}/>
        <button onClick={withdraw}>Withdraw</button>
      </div>
    </div>
  );
}

*/
