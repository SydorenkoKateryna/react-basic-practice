import { Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense, useState, useEffect, useRef } from 'react';
import { usePosts } from 'components/hooks/usePosts';
import BackLink from 'components/BackLink';
import Counter from 'components/Counter';
import ClassCounter from 'components/ClassCounter';
import PostList from 'components/PostList';
import PostForm from 'components/PostForm';
import PostFilter from 'components/PostFilter';
import MyModal from 'components/UI/modal/MyModal';
import MyButton from 'components/UI/button/MyButton';
import Loader from 'components/UI/loader/Loader';
import PostService from 'API/PostService';
import { useFetching } from 'components/hooks/useFetching';

const General = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/practice';
  const mounted = useRef(true);

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [isModalVisble, setIsModalVisible] = useState(false);

  const [fetchPosts, isPostsLoading] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    mounted.current = true;

    if (posts.length) {
      return;
    }

    if (mounted.current) {
      fetchPosts();
    }

    return () => (mounted.current = false);
  }, [fetchPosts, posts.length]);

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

      {/* {postError && <b>There are an error</b>} */}

      {isPostsLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="List of posts"
        />
      )}

      <MyModal visible={isModalVisble} setVisible={setIsModalVisible}>
        <PostForm create={createPost} />
      </MyModal>
    </main>
  );
};

export default General;
