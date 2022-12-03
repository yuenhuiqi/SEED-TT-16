import Account from './Account.js'
import {useState} from 'react'
import { useUserContext } from '../context/userContext.js';



const AccountTransaction = (props)=>{

    let {user} = useUserContext();
 
    
     const [accountInfo, setAccountInfo] = useState("")
     const [transactionInfo, setTransactionInfo] = useState("")
    
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