import HomePage from "../pages/home";
import ProductPage from "../pages/product";

export const routers = [
  { path: "/", element: <HomePage /> },
  { path: "product", element: <ProductPage /> },
];
