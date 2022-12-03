import Account from './Account.js'
import {useState} from 'react'


const AccountTransaction = (props)=>{
    const [accountList, useAccountList] = useState([[{id: 123, type: "abc", balance:12345 ,date: '17 Oct 2010', receipient: 241241, amount: 12331, comment:'testing'},,
     {id:1234, type: "test", balance: 2321, date: '17 Oct 2010', receipient: 241241, amount: 12331, comment:'testing'}]])


    return(
        <>
            <Account 
                accountList={accountList} />
        </>
    )
}

export default AccountTransaction;