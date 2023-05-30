import { Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense, useState } from 'react';
import BackLink from 'components/BackLink';
import Counter from 'components/Counter';
import ClassCounter from 'components/ClassCounter';
import PostList from 'components/PostList';
import PostForm from 'components/PostForm';
import MySelect from 'components/UI/select/MySelect';
// import MyButton from 'components/UI/button/MyButton';
// import MyInput from 'components/UI/input/MyInput';
// import { nanoid } from 'nanoid';

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

  const [selectedSort, setSelectedSort] = useState('');

  // 3v
  const createPost = newPost => [setPosts(prev => [...prev, newPost])];

  // 1v
  // const [title, setTitle] = useState('');
  // 1.1v
  // const [body, setBody] = useState('');
  // 1.2v
  // const descriptionInputRef = useRef();

  // const addNewPost = e => {
  //   e.preventDefault();

  //   const newPost = {
  //     id: nanoid(),
  //     title,
  //     // body: descriptionInputRef.current.value,
  //     body,
  //   };

  //   setPosts(prev => [...prev, newPost]);

  //   setTitle('');
  //   setBody('');
  // };

  // 2v
  // const [post, setPost] = useState({ title: '', body: '' });

  // const addNewPost = e => {
  //   e.preventDefault();

  //   setPosts(prev => [...prev, { ...post, id: nanoid() }]);

  //   setPost({ title: '', body: '' });
  // };

  const removePost = id => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const sortPosts = sort => {
    setSelectedSort(sort);
    console.log(sort);

    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
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
        <PostForm create={createPost} />
      </div>

      <hr style={{ margin: '15px 0' }} />

      <div>
        {/* <select>
          <option value="value1">By title</option>
          <option value="value2">By description</option>
        </select> */}
        <MySelect
          value={selectedSort}
          handleSortValueChange={sortPosts}
          defaultValue="Sort by:"
          options={[
            { value: 'title', name: 'Title' },
            { value: 'body', name: 'Description' },
          ]}
        />
      </div>

      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title="List of posts" />
      ) : (
        <h2 style={{ textAlign: 'center' }}>There are no posts yet...</h2>
      )}
    </main>
  );
};

export default General;
