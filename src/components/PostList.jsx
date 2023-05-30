import PostItem from './PostItem';

const PostList = ({ posts, title, remove }) => {
  // if (!posts.length) {
  //   return <h2 style={{ textAlign: 'center' }}>There are no posts yet...</h2>;
  // }
  return (
    <div>
      <h2>{title}</h2>
      {posts.map((post, index) => (
        <PostItem
          key={post.id}
          post={post}
          number={index + 1}
          remove={remove}
        />
      ))}
    </div>
  );
};

export default PostList;
