import { createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home'

export const router = createBrowserRouter([
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
])
