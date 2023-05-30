import { useState } from 'react';
import { nanoid } from 'nanoid';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({ create }) => {
  // 3v
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
        // value={title}
        // onChange={e => setTitle(e.target.value)}
        value={post.title}
        onChange={e => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Name of post"
      />
      <MyInput
        // ref={descriptionInputRef}
        // value={body}
        // onChange={e => setBody(e.target.value)}
        value={post.body}
        onChange={e => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Description of post"
      />
      <MyButton type="submit" onClick={addNewPost}>
        Create a post
      </MyButton>
    </form>
  );
};

export default PostForm;
