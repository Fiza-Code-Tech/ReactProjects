import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { loader as landingLoader } from './pages/Landing';
import {
  Landing,
  About,
  Cocktail,
  Error,
  HomeLayout,
  Newsletter,
  SinglePageError,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <SinglePageError />,
      },
      { path: 'about', element: <About /> },
      { path: 'newsletter', element: <Newsletter /> },
      { path: 'cocktail', element: <Cocktail /> },
    ],
  },
  {
    path: '/about',
    element: <About />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
