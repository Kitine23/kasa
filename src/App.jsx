import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home'

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/fiche-logement',
    element: <h1>Fiche-Logement</h1>,
  },
  {
    path: '/404',
    element: <h1>404</h1>,
  },
  {
    path: '/about',
    element: <h1>A propos</h1>,
  },
])

function App() {
  return (
    <>
      <nav>
        logo
        <ul>
          <li>
            <a href={`/home`}>Accueil</a>
          </li>
          <li>
            <a href={`/fiche-logement`}>Fiche logement</a>
          </li>
          <li>
            <a href={`/about`}>A propos</a>
          </li>
        </ul>
      </nav>
      <RouterProvider router={router} />
    </>
  )
}

export default App
