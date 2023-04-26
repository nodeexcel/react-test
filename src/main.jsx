import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navigation from "./components/common/Navigation.jsx";
import "./main.css";
import Role from "./pages/Role.jsx";

import store from "./store/index.js";
import User from "./pages/User.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5", 
    },
    secondary: {
      main: "#f50057",  
    },
  },
  typography: {
    fontFamily: "Poppins,Roboto, Arial, sans-serif", 
    fontSize: 16,
  },

});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navigation />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "user",
        element: <User />,
        children: [
          {
            path: "add",
          },
          {
            path: "edit",
          },
        ],
      },
      {
        path: "role",
        element: <Role />,
        children: [
          {
            path: "add",
          },
          {
            path: "edit",
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <>404 Page</>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
);
