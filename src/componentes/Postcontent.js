

function PostContent({ post }) {
    return (
      <div className="contenedor">
        <h2>{post.title}</h2>
        <img src={`https://bmlx3df4ma7r1yh4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ujaqz3w25wtt4t6e/img/${post.image}`} alt={post.title} />
        <p>{post.message}</p>
      </div>
    );
  }
  
  export default PostContent;