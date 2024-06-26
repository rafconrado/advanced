import "./App.css";

import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import { HookUseContext } from "./components/HookUseContext";

//PAGES
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <HookUseContext>
        <h1>
          <BrowserRouter>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </BrowserRouter>
        </h1>
      </HookUseContext>
    </div>
  );
}

export default App;
