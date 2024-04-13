import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './core/layout/Layout.tsx'
import Home from './components/home/Home.tsx'
import About from './components/about/About.tsx'
import User from './components/user/User.tsx'
import Github, { GithubInfoLoader } from './components/github/Github.tsx'

// Method-1
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { path: '', element: <Home />},
//       { path: 'about', element: <About />}
//     ]
//   }
// ])

// Method-2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout />}>
      <Route path = '' element = {<Home />}/>
      <Route path = 'about' element = {<About />}/>
      <Route path = 'user/:id' element = {<User />}/>
      {/* <Route path = 'github' element = {<Github />}/> */}
      <Route path='github' element = {<Github />} loader={GithubInfoLoader}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
