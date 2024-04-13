import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './core/layout/Layout.tsx'
import Home from './components/home/Home.tsx'
import About from './components/about/About.tsx'
// import { BrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home />},
      { path: 'about', element: <About />}
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter>, */}

    <RouterProvider router={router}/>
  </React.StrictMode>,
)
