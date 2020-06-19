import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h2>Add New Transaction</h2>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text"><h3>Transaction Name:</h3></label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            ><h3>Transaction Amount:</h3> <br />
            <b>*[ Negative (-) For Expense & Positive (+) For Income ]</b></label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount..." />
        </div>
        <button className="btn"><b>Add New Transaction</b></button>
      </form>
    </>
  )
}
