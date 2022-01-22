import "./styles/app.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Views
import Home from "./views/home/home.view";
const Page1 = React.lazy(() => import("./views/page1/page1.view"));

function App() {
  return (
    <Router>
      <div>
        <h1>Hello World</h1>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/page1"}>Page1</Link>
        </nav>
        <React.Suspense fallback={<span>Loading....</span>}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/page1" element={<Page1 />}></Route>
          </Routes>
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;
