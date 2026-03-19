import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import AppDetails from "../Pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                loader: () => fetch('/apps.json'),
                Component: Home
            },
            {
                path: "apps",
                loader: () => fetch('/apps.json'),
                Component: Apps
            },
            {
                path: "app-details/:id",
                loader: () => fetch('/apps.json'),
                Component: AppDetails
            }
        ]
    }
])