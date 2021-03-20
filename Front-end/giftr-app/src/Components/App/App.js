import React from "react";
import "./App.css";
import About from "../About";
import Main from "../Main";
import Contact from "../Contact";
//import LoginButton from "../LoginButton";
import AuthButton from "../AuthButton";
//import { useAuth0 } from "@auth0/auth0-react";
import { AuthProvider } from "../../authContext";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <div>
            <h1 data-testid="heading">
              G~I~F~T~<span className="r">R</span>
            </h1>
            <AuthButton />
            <nav>
              <ul>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/main">Main</Link>
                </li>
                <li>
                  <a
                    href="https://www.grindr.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Affiliations
                  </a>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/main">
                <Main />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <About />
              </Route>
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
