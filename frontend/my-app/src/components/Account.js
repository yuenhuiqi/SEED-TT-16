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
                                accountType={account.type}
                                accountId={account.id}
                                accountBalance={account.balance}/>

                              <Transrecord account={account}/> 
                        </>
                    )}

            )

    )
}

export default Account;