import React, { useState } from 'react'

function ExpenseTracker() {
    const [total,setTotal]=useState("");
    const [button,setButton]=useState('');
    const [totalx,setTotalx]=useState('')
   function handelbutton(){
    setTotal(()=>{

    })
    

   }




  return (
    <>

<div id="wrapper">
      <div id="information">
        <div id="total">
          <input
            type="text"
            placeholder="Enter Total Budget for this month"
            id="totalamt"
            value={total}
            onChange={(e) => setTotal(e.target.value)}

          />
        </div>

        <div id="info">
          <h3 id="totalx">Total:{total}</h3>
          <h3 id="spent">Spent:</h3>
          <h3 id="remaining">Remaining:</h3>
        </div>
      </div>

      <div id="enterExpense">
        <form action="">
          <input type="text" placeholder="Expense Detail" /><br />
          <input type="text" placeholder="Expense Amount" /><br />  
          <button type="submit" onClick={handelbutton}>Add Expense</button>
        </form>
      </div>

      <div id="expenseTracker">
        <table>
            <tr>
                <th>S.No</th>
                <th>Info</th>
                <th>Amount</th>
            </tr>
        </table>
      </div>
    </div>

    </>
  )
}

export default ExpenseTracker