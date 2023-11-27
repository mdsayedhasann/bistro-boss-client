import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";
import Secret from "../pages/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import Payment from "../pages/Dashboard/Payment/Payment";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
          {
              path: '/',
              element: <Home></Home>
          },
        {
          path: '/menu',
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        }, 
        {
          path: 'secret',
          element: <PrivateRouter> <Secret></Secret> </PrivateRouter>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        }, 
        {
          path: 'users',
          element: <AllUsers></AllUsers>
        },
        {
          path: 'addItems',
          element: <AddItem></AddItem>
        },
        {
          path: 'manageItems',
          element: <ManageItems></ManageItems>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        }
      ]
    }
  ]);