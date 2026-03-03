import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import React from 'react';
import Home from './Components/Pages/Home/Home.jsx';
import AddPhone from './Components/Pages/AddPhone/AddPhone.jsx';
import AllPhones from './Components/Pages/AllPhones/AllPhones.jsx';
import Update from './Components/Pages/Update/Update.jsx';
import Login from './Components/Pages/Login/Login.jsx';
import Register from './Components/Pages/Register/Register.jsx';
import ErrorPage from './Components/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addPhone",
        element: <AddPhone></AddPhone>
      },
      {
        path: "/allPhones",
        element: <AllPhones></AllPhones>,
        loader: () => fetch("https://brand-phone-auth-server.vercel.app/phones").then(res => res.json()),
        errorElement: <ErrorPage />
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) => fetch(`https://brand-phone-auth-server.vercel.app/phones/${params.id}`).then(res => res.json()),
        errorElement: <ErrorPage />
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
