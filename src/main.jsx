import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App.jsx'
import TaskDetails from "./pages/TaskDetails.jsx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },{
    path: "/task-details",
    element: <TaskDetails />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
