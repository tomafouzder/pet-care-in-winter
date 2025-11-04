import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../components/Home/Home";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import CardDetails from "../components/CardDetails/CardDetails";
import PetCareWinter from "../components/PetCareWinter/petCareWinter";
import VetSection from "../components/VetSection/VetSection";

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
                    element: <h3>Profile</h3>
                },
                {
                    path: "/cardDetails/:id",
                    Component: CardDetails
                },
                {
                    path:"/petCareWinter",
                    Component: PetCareWinter
                },
                {
                    path:"/vetSection",
                    Component:VetSection
                }
            ]
        },



    ]);

export default router;