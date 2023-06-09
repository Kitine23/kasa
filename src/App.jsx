import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home'
import MainLayout from './layouts/Main'

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
    path: '/about',
    element: <h1>A propos</h1>,
  },
  {
    path: '*',
    element: <h1>404</h1>,
  },
])

function App() {
  return (
    <MainLayout>
      <RouterProvider router={router} />
    </MainLayout>
  )
}

export default App
