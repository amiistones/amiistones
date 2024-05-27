import ReactDOM from 'react-dom/client'
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import BuildAmiiboList from './scripts/BuildAmiiboList.jsx';

import App from "./App";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Settings from "./pages/Settings";
import Guide from "./pages/Guide";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import './index.css'

const teamsColors = {red: "#e04827", green: "#66ce51", blue: "#4894e9", yellow: "#dcc100", default: "#eee"};
const currentTeams = ["red", "blue"];

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
        element: <Game
                  teamsColors={teamsColors}
                  currentTeams={currentTeams}/>,
        loader: ({ params }) => {
          return (BuildAmiiboList());
        },
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/guide",
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
