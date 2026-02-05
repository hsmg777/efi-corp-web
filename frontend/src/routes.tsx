import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Home } from "@/pages/home";
import { Servicios } from "@/pages/servicios";
import { Sistema } from "@/pages/sistema";
import { Nosotros } from "@/pages/nosotros";
import { Contacto } from "@/pages/contacto";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            { index: true, Component: Home },
            { path: "servicios", Component: Servicios },
            { path: "sistema", Component: Sistema },
            { path: "nosotros", Component: Nosotros },
            { path: "contacto", Component: Contacto },
        ],
    },
]);
