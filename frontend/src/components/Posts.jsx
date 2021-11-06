import Post from "./Post";

function Posts({ posts }) {
  return (
    <div>
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}
export default Posts;