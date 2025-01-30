import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import Profil from "./pages/Profil";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path:'/',
                element: <HomePage/>
            },
            {
                path:'/profile',
                element: <Profil/>
            }
        ]
    },
    
])

// const router used to create an Array of object who define 
// the different path we can get in our web application.