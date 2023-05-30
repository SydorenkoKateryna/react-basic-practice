import { Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense, useState, useMemo } from 'react';
import BackLink from 'components/BackLink';
import Counter from 'components/Counter';
import ClassCounter from 'components/ClassCounter';
import PostList from 'components/PostList';
import PostForm from 'components/PostForm';
import PostFilter from 'components/PostFilter';
// import MySelect from 'components/UI/select/MySelect';
// import MyInput from 'components/UI/input/MyInput';

const General = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/practice';

  const [posts, setPosts] = useState([
    { id: 1, title: 'JS 1', body: 'Description' },
    { id: 2, title: 'JS 2', body: 'Description' },
    { id: 3, title: 'JS 3', body: 'Description' },
    { id: 4, title: 'JS 4', body: 'Description' },
    { id: 5, title: 'JS 5', body: 'Description' },
  ]);

  // const [selectedSort, setSelectedSort] = useState('');
  // const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState({ sort: '', query: '' });

  // const sortedPosts = useMemo(() => {
  //   console.log('Sorted Fn worked');

  //   if (selectedSort) {
  //     return [...posts].sort((a, b) =>
  //       a[selectedSort].localeCompare(b[selectedSort])
  //     );
  //   }
  //   return posts;
  // }, [posts, selectedSort]);

  const sortedPosts = useMemo(() => {
    console.log('Sorted Fn worked');

    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [posts, filter.sort]);

  // const sortedAndSearchedPosts = useMemo(() => {
  //   return sortedPosts.filter(post =>
  //     post.title.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  // }, [searchQuery, sortedPosts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const createPost = newPost => [setPosts(prev => [...prev, newPost])];

  const removePost = id => {
    setPosts(posts.filter(post => post.id !== id));
  };

  // const sortPosts = sort => {
  //   setSelectedSort(sort);
  // };

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

        <hr style={{ margin: '15px 0' }} />

        <PostFilter filter={filter} setFilter={setFilter} />
      </div>

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="List of posts"
      />
    </main>
  );
};

export default General;
