import '../styles/PostItem.css';
import MyButton from './UI/button/MyButton';

const PostItem = ({ post: { id, title, body } }) => {
  return (
    <div className='post'>
      <div className='post__content'>
        <strong>
          {id}. {title}
        </strong>
        <div>{body}</div>
      </div>
      {/* <div className='post__btn'>
        <button type="button">Delete</button>
      </div> */}
     
        <MyButton type="button">Delete</MyButton>
      
    </div>
  );
};

export default PostItem;
