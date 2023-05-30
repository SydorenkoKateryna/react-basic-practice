import { useState } from 'react';
import { nanoid } from 'nanoid';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = e => {
    e.preventDefault();

    const newPost = {
      ...post,
      id: nanoid(),
    };

    create(newPost);

    setPost({ title: '', body: '' });
  };

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '600px',
        alignItems: 'flex-start',
      }}
    >
      <MyInput
        value={post.title}
        onChange={e => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Name of post"
      />
      <MyInput
        value={post.body}
        onChange={e => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Description of post"
      />
      <MyButton type="submit" onClick={addNewPost}>
        Create
      </MyButton>
    </form>
  );
};

export default PostForm;
