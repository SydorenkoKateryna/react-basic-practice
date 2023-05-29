import { Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense, useRef, useState } from 'react';
import BackLink from 'components/BackLink';
import Counter from 'components/Counter';
import ClassCounter from 'components/ClassCounter';
import PostList from 'components/PostList';
import MyButton from 'components/UI/button/MyButton';
import MyInput from 'components/UI/input/MyInput';
import { nanoid } from 'nanoid';

const General = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/practice';

  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Description' },
    { id: 2, title: 'JS 2', body: 'Description' },
    { id: 3, title: 'JS 3', body: 'Description' },
    { id: 4, title: 'JS 4', body: 'Description' },
    { id: 5, title: 'JS 5', body: 'Description' },
  ]);

  const [title, setTitle] = useState('');

  const descriptionInputRef = useRef();

  const addNewPost = e => {
    e.preventDefault();
    console.log(title);
    console.log(descriptionInputRef.current.value);

    const newPost = {
      id: nanoid(),
      title: title,
      body: descriptionInputRef.current.value,
    };

    console.log(newPost)

    setPosts(prev => ([ ...prev, newPost ]));
  };

  return (
    <main>
      <BackLink to={backLinkHref}>Back to practice</BackLink>
      <h1>General</h1>
      <ul>
        <li>
          <Link to="test">Test Subpage</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>

      <div>
        <h2>Counter</h2>
        <Counter />
        <ClassCounter />
      </div>

      <div>
        <h2>Form</h2>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '600px',
            alignItems: 'flex-start',
          }}
        >
          <MyInput
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text"
            placeholder="Name of post"
          />
          {/* <input ref={descriptionInputRef} type="text" placeholder="Description of post" /> */}
          <MyInput
            ref={descriptionInputRef}
            type="text"
            placeholder="Description of post"
          />
          <MyButton type="submit" onClick={addNewPost}>
            Create a post
          </MyButton>
        </form>
      </div>

      <PostList posts={posts} title="List of posts" />
    </main>
  );
};

export default General;
