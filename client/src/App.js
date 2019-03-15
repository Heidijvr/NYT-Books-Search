import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch routes={[
        { path: "/", exact: true, component: Home },
        { path: "/saved", exact: true, component: {Saved} },
        { component: NoMatch }
         ]} />
      </div>
    </Router>
  );
}

export default App;
