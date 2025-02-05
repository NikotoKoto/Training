import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";

import ErrorPage from "./pages/ErrorPage";
import ProfileOverview from "./pages/Profile/pages/Profile_ProfileOverview/ProfileOverview";
import ProfileData from "./pages/Profile/pages/Profile_ProfileData/ProfileData";
import Profil from "./pages/Profile/Profil";

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
                path:'/profile/',
                element: <Profil/>,
                children:[
                    {
                        index:true,
                        element:<ProfileOverview/>
                    },
                    {
                        path:"data",
                        element:<ProfileData/>
                    }
                ]
            }
        ]
    },
    
])

// const router used to create an Array of object who defined
// the different path we can get in our web application.