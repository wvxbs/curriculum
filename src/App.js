import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.sass'
import Home from './pages/Home'

function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element: <div>OIIII</div>
    } 
  ])

  return <RouterProvider router={router} />
}

export default App