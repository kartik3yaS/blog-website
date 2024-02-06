import { useParams, Link } from "react-router-dom";

const PostPage = ({posts, handleDelete}) => {
    const {id} = useParams();
    const post = posts.find((post) => (post.id).toString() === id);
    
    return(
        <main>
            <article className="post">
                {post && 
                    <>
                        <h2>{post.title}</h2>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postBody">{post.body}</p>
                        <Link to={`/edit/${post.id}`}><button className="editButton">Edit Post</button></Link>
                        {/* console.log(typeof id) */}
                        <button className="deleteButton" onClick={() => handleDelete(post.id)}>
                            Delete Post
                        </button>
                    </>
                }
                {post === null && 
                    <>
                        <h2>Post not found</h2>
                        <p>
                            <Link to='/'>Visit our HomePage</Link>
                        </p>
                    </>
                }
            </article>
        </main>
    )
}

export default PostPage;