import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home.jsx'
import Menu from './pages/menu.jsx'
import DetailProduct from './pages/detailProduct.jsx'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/menu',
    element: <Menu />
  },
  {
    path: '/detail-product/:id',
    element: <DetailProduct />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
