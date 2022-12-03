import Account from './Account.js'
import {useState} from 'react'


const AccountTransaction = (props)=>{
    const [accountList, useAccountList] = useState([])

    return(
        <>
            <Addtrans />
            <Account accountList={accountList}/>
        </>
    )
}

export default AccountTransaction;