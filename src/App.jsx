import { Link, Outlet } from "react-router-dom";

import './App.css'

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/game">Play</Link>
        <Link to="/stage-settings">Resize stage</Link>
        <Link to="/how-to-play">How to play ?</Link>
        <Link to="/about">About</Link>
        <a href="https://github.com/amiistones/amiistones/" target="_blank">GitHub</a>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
    );
}

export default App
