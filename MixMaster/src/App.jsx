import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { loader as landingLoader } from './pages/Landing';
import { loader as cocktailLoader } from './pages/Cocktail';
import { action as newsletterAction } from './pages/Newsletter';
import {
  Landing,
  About,
  Cocktail,
  Error,
  HomeLayout,
  Newsletter,
  SinglePageError,
} from './pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader(queryClient),
        errorElement: <SinglePageError />,
      },
      { path: 'about', element: <About /> },
      { path: 'newsletter', element: <Newsletter />, action: newsletterAction },
      { path: 'cocktail', element: <Cocktail /> },
      {
        path: 'cocktail/:id',
        element: <Cocktail />,
        errorElement: <SinglePageError />,
        loader: cocktailLoader,
      },
    ],
  },
  {
    path: '/about',
    element: <About />,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};
export default App;
