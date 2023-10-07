import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ErrorPage from './components/ErrorPage.jsx'
import Home from './components/Home.jsx'
import Shop from './components/Shop.jsx'
import ProductDetails from './components/ProductDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />},
      {
        path: "shop",
        element: <Shop />, 
      },
      {
        path: "shop/:productId",
        element: <ProductDetails />
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
