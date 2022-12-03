const AccountHeader = (props)=>{
    const accountType = props.accountType
    const accountId = props.accountId
    const accountBalance = props.accountBalance
    
    return(
        <div>
            <p>Type: {accountType}</p>
            <p>ID: {accountId}</p>
            <p>Balance: {accountType}</p>
        </div>
    )
}

export default Account;