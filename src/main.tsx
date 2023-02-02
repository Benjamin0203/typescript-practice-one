import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './components/Login';
import ErrorPage from './routes/ErrorPage';
import Contact from './routes/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { 
        path: "contacts/:contactId",
        element: <Contact />,
      }],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "contacts/:id",
    element: <Contact />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
