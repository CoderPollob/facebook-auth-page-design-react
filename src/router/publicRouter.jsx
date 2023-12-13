import Auth from "../pages/auth/Auth";
import Home from "../pages/home/Home";

// Create Public router
const publicRouter = [
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/auth",
    element: <Auth/>,
  },
];

// export default
export default publicRouter;
