import Account from './Account.js'
import {useState} from 'react'


const AccountTransaction = (props)=>{
    const [account, useAccount] = useState({})



    return(
        <>
            <Addtrans />
            <Account />
        </>
    )
}

export default AccountTransaction;