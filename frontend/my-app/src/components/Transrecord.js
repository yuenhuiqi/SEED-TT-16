
const Transrecord = (props)=>{
  const account = props.account

  return(
        account.map((trans) => {
                    return (
                        <>
                            <p>Date: {trans.date}</p>
                            <p>Receipient: {trans.receipient}</p>
                            <p>Amount: {trans.amount}</p>
                            <p>Comment: {trans.comment}</p>
                            
                        </>
                        )
                    }
        )
  )

}

export default Transrecord

