import AccountHeader from "./AccountHeader"

import Transrecord from "./Transrecord"

const Account = (props)=>{
    const accountList = props.accountList
    return(

            accountList.map((account)=>{
                    return(
                        <>
                            {/* <Addtrans 
                                accountId={account.id}
                            /> */}
                            <AccountHeader 
                                account = {account}/>

                              <Transrecord account={account}/> 
                        </>
                    )}

            )

    )
}

export default Account;