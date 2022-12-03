import Transrecord from "./Transrecord";
const AccountHeader = (props)=>{
    const handleDelete = () => {
        /* api call to delete transaction*/
    }

    return(
        <div>

            {props.account.map((trans) => 
                    <div>
                        <button onClick={()=> handleDelete(trans.id,props.account.userId)}>Delete Transaction</button>
                        <p>Type: {trans.type}</p>
                        <p>ID: {trans.id}</p>
                        <p>Balance: {trans.balance}</p>
                        <Transrecord account={props.account}/> 
                    

                    </div>
                    
                          
            )}
            

        </div>
    )
}

export default AccountHeader;