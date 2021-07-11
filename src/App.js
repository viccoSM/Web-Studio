import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Logo } from "./components/atom";
import LandingPages from "./components/pages/LandingPages";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPages} />
      </Router>
    </div>
  );
}

export default App;
