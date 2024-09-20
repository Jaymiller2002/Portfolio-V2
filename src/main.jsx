import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';

// project styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import About from './About';
import App from './App';
import Features from './Features';  // Import Features component
import Projects from './Projects';  // Import Projects component
import Contact from './Contact';    // Import Contact component
import Home from './Home';
import ErrorPage from './ErrorPage';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <Header />
      <div id='page-content'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/features',  // Add Features path
        element: <Features />
      },
      {
        path: '/projects',  // Add Projects path
        element: <Projects />
      },
      {
        path: '/contact',   // Add Contact path
        element: <Contact />
      },
      {
        path: '/Home',
        element: <Home />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
