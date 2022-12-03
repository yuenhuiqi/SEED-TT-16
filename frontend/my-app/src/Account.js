const Account = (props)=>{
    const accountList = props.accountList
    return(

            accountList.map((account)=>{
                    return(
                        <>
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