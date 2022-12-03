import Account from './Account.js'
import {useState, useEffect} from 'react'
import { useUserContext } from '../context/userContext.js';
import localhost from '../localhost.js';



const AccountTransaction = (props)=>{

    let {user} = useUserContext();
 
    
     const [accountInfo, setAccountInfo] = useState("")

     const getAccountInfo = async () => {
        // const response = await localhost.get(`/getAccountInfo/${user}`);
        // console.log(response.data);
        // setAccountInfo(response.data);
        fetch(`//localhost:5000/getAccountInfo/42AMpjoMwKgFDxGZNRLPfIVs0nz1`)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }

    
    useEffect(() => {
        getAccountInfo();
      });



    return(
        <>
            {/* <h1>{user}</h1>
            <Account 
                accountInfo={accountInfo}
                user={user}/> */}
            <h1>{accountInfo}</h1>
        </>
    )
}

export default AccountTransaction;