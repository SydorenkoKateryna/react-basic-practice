import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

const Home = lazy(() => import('../pages/Home'));
const Practice = lazy(() => import('../pages/Practice'));
const General = lazy(() => import('../pages/General'));
const About = lazy(() => import('../pages/About'));
const Test = lazy(() => import('./Test'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="practice" element={<Practice />} />
        <Route path="practice/general" element={<General />}>
          <Route path="test" element={<Test />} />
        </Route>
        <Route path="practice/about" element={<About />} />
      </Route>
    </Routes>
  );
};
