import { Link, useLocation } from 'react-router-dom';

const Practice = () => {
  const location = useLocation();

  return (
    <main>
      <h1>Practice</h1>
      <ul>
        <li>
          <Link to="general" state={{ from: location }}>
            General
          </Link>
        </li>
        <li>
          <Link to="about" state={{ from: location }}>
            About
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default Practice;
