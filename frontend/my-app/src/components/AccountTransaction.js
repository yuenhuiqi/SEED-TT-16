import Account from './Account.js'
import {useState} from 'react'


const AccountTransaction = (props)=>{
    const [accountList, useAccountList] = useState([0,1])


    return(
        <>
            <Account 
                accountList={accountList} />
        </>
    )
}

export default AccountTransaction;