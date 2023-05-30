import { Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense, useState } from 'react';
import { usePosts } from 'components/hooks/usePosts';
import BackLink from 'components/BackLink';
import Counter from 'components/Counter';
import ClassCounter from 'components/ClassCounter';
import PostList from 'components/PostList';
import PostForm from 'components/PostForm';
import PostFilter from 'components/PostFilter';
import MyModal from 'components/UI/modal/MyModal';
import MyButton from 'components/UI/button/MyButton';

const General = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/practice';

  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [isModalVisble, setIsModalVisible] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = newPost => {
    setPosts(prev => [...prev, newPost]);
    setIsModalVisible(false);
  };

  const removePost = id => {
    setPosts(posts.filter(post => post.id !== id));
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
        <MyButton onClick={() => setIsModalVisible(true)}>
          Create a post
        </MyButton>
        <hr style={{ margin: '15px 0' }} />
        <PostFilter filter={filter} setFilter={setFilter} />
      </div>

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="List of posts"
      />

      <MyModal visible={isModalVisble} setVisible={setIsModalVisible}>
        <PostForm create={createPost} />
      </MyModal>
    </main>
  );
};

export default General;
