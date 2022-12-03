import Account from './Account.js'
import {useState} from 'react'


const AccountTransaction = (props)=>{
    const [accountList, useAccountList] = useState([])

    const handleAddTrans = (id, receipient, date, amount, comments) => {

    }

    return(
        <>
            <Account 
                accountList={accountList}
                handleAddTrans={()=>handleAddTrans(id, receipient, date, amount, comments)}/>
        </>
    )
}

export default AccountTransaction;