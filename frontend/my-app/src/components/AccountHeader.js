const AccountHeader = (props)=>{
    const accountType = props.accountType
    const accountId = props.accountId
    const accountBalance = props.accountBalance
    
    return(
        <div>
            <p>Type: {accountType}</p>
            <p>ID: {accountId}</p>
            <p>Balance: {accountBalance}</p>
        </div>
    )
}

export default AccountHeader;