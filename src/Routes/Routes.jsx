import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import AppDetails from "../Pages/AppDetails/AppDetails";
import Installation from "../Pages/Installation/Installation";
import Error from "../Pages/Error/Error";
import Loader from "../Components/Loader/Loader";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                loader: () => fetch('/apps.json'),
                HydrateFallback: Loader,
                Component: Home
            },
            {
                path: "apps",
                loader: () => fetch('/apps.json'),
                HydrateFallback: Loader,
                Component: Apps
            },
            {
                path: "app-details/:id",
                loader: () => fetch('/apps.json'),
                HydrateFallback: Loader,
                Component: AppDetails
            },
            {
                path: "installation",
                loader: () => fetch('/apps.json'),
                HydrateFallback: Loader,
                Component: Installation
            },
            {
                path: "*",
                Component: Error
            }
        ]
    }
])