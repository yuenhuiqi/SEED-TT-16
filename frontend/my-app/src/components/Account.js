import AccountHeader from "./AccountHeader"


const Account = (props)=>{
    const accountInfo = props.accountInfo
    return(

            props.accountInfo.map((accountInfo)=>{
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