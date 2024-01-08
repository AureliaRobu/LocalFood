import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
