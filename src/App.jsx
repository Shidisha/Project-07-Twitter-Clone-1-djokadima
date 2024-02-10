
import Layout from "./components/layout.jsx";
import SideBare from './pages/side-bare.jsx';
import Home from './pages/home.jsx';
import TrendsBare from './pages/trend-bare.jsx';
import('./style/reset.css');
import('./style/App.css');
import {createBrowserRouter, RouterProvider, Route,Link, } from "react-router-dom";

/* const router = creatBrowserRouter([
  {
    path:"/",
    element:<home/>
  },
  {
    path:"/Explore",
    element:<Expore/>
  },
  {
    path:"/Notifications",
    element:<Notifications/>
  },
  {
    path:"/Message",
    element:<Message/>
  },
  {
    path:"/Bookmarks",
    element:<Bookmarks/>
  },
  {
    path:"/Lists",
    element:<Profile/>
  },
  {
    path:"/Profile",
    element:<Profile/>
  },
  {
    path:"/More",
    element:<More/>
  }
]);*/

export default function App() {
  return (
    <Layout>
      <SideBare/>
      <Home/>
      <TrendsBare/>
    </Layout>
  );
}
