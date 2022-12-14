import React, {useState} from 'react'

export const AddTransaction = () => {
 const [text, setText] = useState("")
 const [amount, setAmount] = useState(0)


  return (
    <>
        <h3>Add new transaction</h3>
        <form>
            <div className="form-control">
                <label htmlFor='text'>Text</label>
                <input 
                type="text"
                value={text} 
                placeholder='Enter a text...'
                onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor='amount'>Amount</label>
                <input
                type="number"
                placeholder='Enter amount...'
                value={amount}
                onChange={(e)=> setAmount(e.target.value)} />
            </div>
            <button className="btn">Add transaction</button>
        </form>
    </>
  )
}
