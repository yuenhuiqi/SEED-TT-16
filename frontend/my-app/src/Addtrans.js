const AddPostForm = (props) => {
    
    
    return(
        <form>
            <label for="postText">New Transactions</label>
            <br />
            <textarea 
                id="postText"
                name="postText"
                rows="10"
                cols="50"
                placeholder="Add new transactions"
                value={props.currentText}
                onChange={(e)=>{
                props.handleNewPost(e.target.value)
                }}>
            </textarea>
            <br />
            <button onClick={() => props.onSubmit()}>Submit</button>
        </form>
        
    )
}
export default AddPostForm