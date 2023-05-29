import { useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink';

const Form = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/practice';

  return (
    <main>
      <BackLink to={backLinkHref}>Back to practice</BackLink>
      <h1>Form</h1>
    </main>
  );
};

export default Form;
