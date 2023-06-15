import { createBrowserRouter } from 'react-router-dom'
import Home from '../routes/Home'
import MainLayout from './Main'
import About from '../routes/About'
import NotFound from '../routes/NotFound'
import Estate from '../routes/Estate'

// https://stackoverflow.com/a/74168838
export const Router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/fiche-logement/:id',
        element: <Estate />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/404',
        element: <NotFound />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])
