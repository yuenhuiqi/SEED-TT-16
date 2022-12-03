
const Transrecord = (props)=>{
  const account = props.account

  return(
    <body>
        <div id="top-header">
        <h1>
            Scheduled Transaction Table
        </h1>
        </div>
        
        <div id="buttons">
            <button type="button" id="delete-trans">Delete Transaction</button>
        </div>
        
        <div id="previous-transaction">
            <h3>Transactions History: </h3>
        </div>
        
        {account.map((trans) => {
            return (
                <>
                <p>Date: {trans.date}</p>
                <p>Receipient: {trans.receipient}</p>
                <p>Amount: {trans.amount}</p>
                <p>Comment: {trans.comment}</p>        
                </>
            )
        })}
        
        <div id="buttons">
            <button type="button" id = "view-more">View More</button>
        </div>
    </body>
  )

}

export default Transrecord

