// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 18,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const Practice = lazy(() => import('../pages/Practice'));
const General = lazy(() => import('../pages/General'));
const Form = lazy(() => import('../pages/Form'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="practice" element={<Practice />} />
        <Route path="practice/general" element={<General />} />
        <Route path="practice/form" element={<Form />} />
      </Route>
    </Routes>
  );
};
