
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
                <button type="button" id ="add-trans">Add Transaction</button>  
                <button type="button" id="delete-trans">Delete Transaction</button>
        </div>
        
        <div id="previous-transaction">
            <h3>Transactions History: </h3>
        </div>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Select</th>
                    <th scope="col">Date</th>
                    <th scope="col">Transaction Reference (Purchase/Transfer)</th>
                    <th scope="col">Amount</th>
                    <th scope="row">Comment</th>
                </tr>
            </thead>
            <tbody>
                {account.map((trans) => {
                    return (
                        <tr>
                            <th scope="row">14/9/2022</th>
                            <td>Mark</td>
                            <td>50</td>
                            <td>hello</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
        <br> </br> 

        <div id="buttons">
            <button type="button" id = "view-more">View More</button>
        </div>
    </body>)

}

export default Transrecord

