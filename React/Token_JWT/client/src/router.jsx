import { createBrowserRouter } from "react-router-dom";
import App from "./App"
import { lazy } from "react";

const HomePage = lazy (() => import('./pages/HomePage/HomePage'))
const SignUp = lazy (() => import('./pages/signUp/SignUp'))
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, 
        element: <HomePage/>,
      },
      {
        path:"signup",
        element: <SignUp/>
      }
    ],
  },
]);
