import AccountHeader from "./AccountHeader"


const Account = (props)=>{
    const accountInfo = props.accountInfo
    return(

            accountList.map((account)=>{
                    return(
                        <>

                            <AccountHeader 
                                accountInfo = {accountInfo}/>

                            
                        </>
                    )}

            )

    )
}

export default Account;