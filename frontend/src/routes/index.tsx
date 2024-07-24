import React from "react";
import { Navigate } from "react-router-dom";
import WebApp from "../pages/web/webApp";

export const routes = [
  {
    path: "/",
    element: <Navigate to="/webapp" replace />,
  },
  {
    path: "/webapp",
    element: (
      <React.Fragment>
        <WebApp />
      </React.Fragment>
    ),
  },
];
