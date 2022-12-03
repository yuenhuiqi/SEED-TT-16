import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import CurrencyInput from 'react-currency-input-field';

function NewTransaction() {
    const [date, setDate] = useState(new Date()); 
    const [bankId, setBankdId] = useState('');
    const [amount, setAmount] = useState(0)
    const [comment, setComment] = useState('');    

    const handleSubmit = () => {
        console.log('submit!!');
        console.log(date);
        return;
    }
  return (
    <div>
        <h1>New Transaction</h1>
        <form style={{display: 'flex', flexDirection: 'column', alignContent: 'flex-start'}}>
            <label>
                Receipient Bank ID:
                <input type="text" name={bankId} onChange={setBankdId} style={{marginLeft: '5px'}} />
            </label>
            <label style={{marginTop: '20px'}}>
                <DatePicker onChange={setDate} value={date} />
            </label>
            <label style={{marginTop: '20px'}}>
                <CurrencyInput
                    id="input-example"
                    name={amount}
                    placeholder="Please enter an amount"
                    allowDecimals={true}
                    prefix='$'
                    defaultValue={0}
                    fixedDecimalLength={2}
                    onValueChange={setAmount}
                />
            </label>
            <label style={{marginTop: '20px'}}>
                Comment:
                <textarea name={comment} onChange={setComment} style={{marginLeft: '10px'}} />
            </label>
            {/* <input type="submit" value="Submit" onClick={handleSubmit} style={{marginTop: '20px', width: '15%', alignSelf: 'center'}} /> */}
            <button onClick={() => {console.log("test")}} style={{marginTop: '20px', width: '15%', alignSelf: 'center'}} >
                submit
            </button>
        </form>
    </div>
    
  )
}

export default NewTransaction