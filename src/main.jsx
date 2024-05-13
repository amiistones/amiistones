import ReactDOM from 'react-dom/client'
import { useEffect } from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import { amiiboList } from './scripts/buildAmiiboList.jsx';

import App from "./App";
import Home from "./pages/Home";
import Game from "./pages/Game";
import StageSettings from "./pages/StageSettings";
import Guide from "./pages/Guide";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import './index.css'

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/game",
        element: <Game />,
        loader: ({ params }) => {
          return (amiiboList);
        },
      },
      {
        path: "/stage-settings",
        element: <StageSettings />,
      },
      {
        path: "/how-to-play",
        element: <Guide />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
