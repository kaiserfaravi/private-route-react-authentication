import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import Authprovider from './Provider/Authprovider.jsx';
import Order from './Components/Order.jsx';
import PrivateRoutes from './Routes/PrivateRoutes.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/order',
        element:<PrivateRoutes><Order></Order></PrivateRoutes>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
  <Authprovider>
  <RouterProvider router={router} />
  </Authprovider>
  
  </StrictMode>,
)
