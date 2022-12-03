import Account from './Account.js'
import {useState} from 'react'
import { useUserContext } from '../context/userContext.js';



const AccountTransaction = (props)=>{

    const {user} = useUserContext();
    const [accountList, useAccountList] = useState([[{id: 123, type: "abc", balance:12345 ,date: '17 Oct 2010', receipient: 241241, amount: 12331, comment:'testing'},
     {id:1234, type: "test", balance: 2321, date: '17 Oct 2012', receipient: 241241, amount: 12331, comment:'testing'}]])


    return(
        <>
            <h1>{user}</h1>
            <Account 
                accountList={accountList} />
        </>
    )
}

export default AccountTransaction;