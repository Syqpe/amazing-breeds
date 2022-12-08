import { FC, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Suspense } from "@components/";

import { Error } from "./error";

const Home = lazy(() => import("./home"));

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense>
                <Home />
            </Suspense>
        ),
        errorElement: <Error />,
        children: [
            {
                path: "whois",
                element: <div>Kassymov Abat</div>,
            },
        ],
    },
]);

export const Routing: FC = function () {
    return <RouterProvider router={router} />;
};
