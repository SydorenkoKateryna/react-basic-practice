import '../styles/PostItem.css';
import MyButton from './UI/button/MyButton';

const PostItem = ({ post: { id, title, body }, number, remove }) => {
  return (
    <div className='post'>
      <div className='post__content'>
        <strong>
          {number}. {title}
        </strong>
        <div>{body}</div>
      </div>
      {/* <div className='post__btn'>
        <button type="button">Delete</button>
      </div> */}
     
        <MyButton type="button" onClick={() => remove(id)}>Delete</MyButton>
      
    </div>
  );
};

export default PostItem;
