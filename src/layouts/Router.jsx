import { createBrowserRouter } from 'react-router-dom'
import Home from '../routes/Home'
import MainLayout from './Main'

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
        path: '/fiche-logement',
        element: <h1>Fiche-Logement</h1>,
      },
      {
        path: '/about',
        element: <h1>A propos</h1>,
      },
      {
        path: '*',
        element: <h1>404</h1>,
      },
    ],
  },
])
