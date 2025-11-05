import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../components/Home/Home";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import CardDetails from "../components/CardDetails/CardDetails";
import PetCareWinter from "../components/PetCareWinter/petCareWinter";
import VetSection from "../components/VetSection/VetSection";
import Login from "../components/AuthPages/Login";
import Register from "../components/AuthPages/Register";
import AuthLayout from "../Layout/AuthLayout";
import MyProfile from "../components/MyProfile/MyProfile";
import PrivateRoute from "../provider/PrivateRoute";
import GoogleLogin from "../components/GoogleLogin/GoogleLogin";

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: HomeLayout,
            children: [
                {
                    index: true,
                    Component: Home,
                },
                {
                    path: "/services",
                    Component: ServiceCard
                },
                {
                    path: "/profile",
                    Component: MyProfile
                },
                {
                    path: "/cardDetails/:id",
                    element: (
                        <PrivateRoute>
                            <CardDetails></CardDetails>
                        </PrivateRoute>
                    )
                },
                {
                    path: "/petCareWinter",
                    Component: PetCareWinter
                },
                {
                    path: "/vetSection",
                    Component: VetSection
                }
            ]
        },
        {
            path: "/auth",
            Component: AuthLayout,
            children: [
                {
                    path: "/auth/login",
                    Component: Login
                },
                {
                    path: "/auth/register",
                    Component: Register
                },
                {
                    path: "/auth/google",
                    Component:GoogleLogin
                }
            ]
        }



    ]);

export default router;