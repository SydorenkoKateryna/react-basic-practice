import PostItem from './PostItem';

const PostList = ({ posts, title, remove }) => {
  return (
    <div>
      <h2>{title}</h2>
      {posts.map((post, index) => (
        <PostItem key={post.id} post={post} number={index + 1} remove={remove}/>
      ))}
    </div>
  );
};

export default PostList;
