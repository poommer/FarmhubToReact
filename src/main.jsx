import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Homepage_1, Homepage_2, Homepage_3 } from "./pages/Homepage.jsx";
import AboutUs from "./pages/AboutAs.jsx";
import Services from "./pages/Service.jsx";
import ServicesDetails from "./pages/ServiceDetails.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import Blog from "./pages/Blog.jsx";
import Product from "./pages/Product.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Faq from "./pages/Faq.jsx";
import Gallery from "./pages/Gallery.jsx";
import GalleryDetails from "./pages/GalleryDetails.jsx";
import Topbar from "./pages/Topbar.jsx";
import Topbar2 from "./pages/Topbar2.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Topbar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Homepage_1 />,
      },
      {
        path: "/homepage2",
        element: <Homepage_2 />,
      },
      {
        path: "/homepage3",
        element: <Homepage_3 />,
      },
    ],
  },

  {
    element: (
      <>
        <Topbar2 />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/Details",
        element: <ServicesDetails />,
      },
      {
        path: "/Blog",
        element: <Blog />,
      },
      {
        path: "/Blog/Details",
        element: <BlogDetails />,
      },
      {
        path: "/Products",
        element: <Product />,
      },
      {
        path: "/Gallery",
        element: <Gallery />,
      },
      {
        path: "/Gallery/Details",
        element: <GalleryDetails />,
      },
      {
        path: "/Product/Details",
        element: <ProductDetails />,
      },
      {
        path: "/Faq",
        element: <Faq />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
