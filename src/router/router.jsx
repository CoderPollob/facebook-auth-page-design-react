import { createBrowserRouter } from "react-router-dom";
import publicRouter from "./publicRouter";
import privateRouter from "./privateRouter";

// Ceeate Router
const router = createBrowserRouter([...publicRouter, ...privateRouter]);

// export default
export default router;
