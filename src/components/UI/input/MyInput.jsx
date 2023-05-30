// import { forwardRef } from 'react';
// import css from './MyInput.module.css';

// const MyInput = forwardRef((props, ref) => {
//   return <input ref={ref} {...props} className={css.myInput} />;
// });

// export default MyInput;

import css from './MyInput.module.css';

const MyInput = (props) => {
  return <input {...props} className={css.myInput} />;
};

export default MyInput;
