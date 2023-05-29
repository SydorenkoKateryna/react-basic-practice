import PostItem from './PostItem';

const PostList = ({ posts, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
