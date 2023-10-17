import { createBrowserRouter } from "react-router-dom"
import BaseLayout from "../layout/BaseLayout"
import DashboardPage from "../components/dashboard/Dashboard"
import Homepage from "../components/homepage/Homepage"

export const router = createBrowserRouter ([
    {
        element: <BaseLayout />,
        errorElement: "<div>Something wrong happened</div>",
        children: [
            {
                path: '/',
                element: <Homepage />
                
            },
            {
                path: '/user/:id',
                element: <DashboardPage />
                
            }
        ]

    }
]
)