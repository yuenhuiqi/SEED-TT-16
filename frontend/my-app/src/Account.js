const Account = (props)=>{
    const accountList = props.accountList
    const handleAddTrans = props.handleAddTrans
    return(

            accountList.map((account)=>{
                    return(
                        <>
                            <Addtrans 
                                accountId={accountId}
                                handleAddTrans={()=> handleAddTrans(id, receipient, date, amount, comments)}
                            />
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