import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import Product from "./routes/Product";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="/" element={<Navigate to="dashboard" />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="product" element={<Product />} />
    </Route>,
  ),
);

function App() {
  return (
    <div className="h-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
