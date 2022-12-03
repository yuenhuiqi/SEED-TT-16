const Post = (props)=>{
    const posts = props.posts; 
    console.log(props.posts)
    return(
            posts.map((post) => {
                return(
                <div key={post.id}>
                    <p className="post">{post.text}</p>
                    <button onClick={() => props.delete(post.id)}>Delete Post</button>
                </div>
                )
                }
            )
    )
}

export default Post;