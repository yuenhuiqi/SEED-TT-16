import Transrecord from "./Transrecord";
const AccountHeader = (props)=>{

    return(
        <div>

            {props.account.map((trans) => 
                    <div>
                        
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