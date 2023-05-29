import { forwardRef } from 'react';
import css from './MyInput.module.css';

const MyInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} className={css.myInput} />;
});

export default MyInput;
