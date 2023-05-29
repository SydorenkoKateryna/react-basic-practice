import { useLocation } from 'react-router-dom';
import BackLink from 'components/BackLink';

const About = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? './practice';

  return (
    <main>
      <BackLink to={backLinkHref}>Back to practise</BackLink>
      <h1>About</h1>
    </main>
  );
};

export default About;
