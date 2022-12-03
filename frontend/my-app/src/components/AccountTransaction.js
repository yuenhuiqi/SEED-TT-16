import Account from './Account.js'
import {useState} from 'react'
import { useUserContext } from '../context/userContext.js';



const AccountTransaction = (props)=>{

    let {user} = useUserContext();
    const [accountList, useAccountList] = useState([[{id: 123, type: "abc", balance:12345 ,date: '17 Oct 2010', receipient: 241241, amount: 12331, comment:'testing'},
     {id:1234, type: "test", balance: 2321, date: '17 Oct 2012', receipient: 241241, amount: 12331, comment:'testing'}]])
    
     const [accountInfo, setAccountInfo] = useState("")
     const [TransactionInfo, setTransactionInfo] = useState("")
    
    useEffect(() => {
        const getAccountInfo = async () => {
            const response = await localhost.get(`/getAccountInfo/${user}`);
            console.log(response.data);
            setAccountInfo(response.data.message);
        }

        const getTransactionInfo = async () => {
            const response = await localhost.get(`getScheduledTransactions/${accountInfo.accountID}`);
            console.log(response.data);
            setTransactionInfo(response.data.message);
        }
      });



    return(
        <>
            <h1>{user}</h1>
            <Account 
                accountInfo={accountInfo}
                user={user}
                transactionInfo={transactionInfo} />
        </>
    )
}

export default AccountTransaction;