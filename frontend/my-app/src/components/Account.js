import AccountHeader from "./AccountHeader"


const Account = (props)=>{
    const accountList = props.accountList
    return(

            accountList.map((account)=>{
                    return(
                        <>

                            <AccountHeader 
                                account = {account}/>

                            
                        </>
                    )}

            )

    )
}

export default Account;