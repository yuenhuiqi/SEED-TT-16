import Transrecord from "./Transrecord";
const AccountHeader = (props)=>{
    const handleDelete = (transId,user) => {
        /* api call to delete transaction*/

    }
    const accountInfo = props.accountInfo
    return(
        <div>

            {props.account.info.map((accountInfo) => 
                    <div>
                        <button onClick={()=> handleDelete(accountInfo.accountID,props.user)}>Delete Transaction</button>
                        <p>Type: {accountInfo.accountType}</p>
                        <p>ID: {accountInfo.accountID}</p>
                        <p>Balance: {accountInfo.accountBalance}</p>
                        <Transrecord account={props.account}/> 
                    

                    </div>
                    
                          
            )}
            

        </div>
    )
}

export default AccountHeader;