import React from "react";
import "./App.css";

import About from "../About";
import Main from "../Main";
import Contact from "../Contact";
import LoginButton from "../LoginButton";
import AuthButton from "../AuthButton";
import { useAuth0 } from "@auth0/auth0-react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className="App">
      <Router>
      <div>
      <h1>G~I~F~T~<span className="r">R</span></h1>
      <AuthButton user={user} isAuthenticated={isAuthenticated} isLoading={isLoading}></AuthButton>
        <nav>
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/main">Main</Link>
            </li>
            <li><a href="https://www.grindr.com/"target="_blank">Affiliations</a></li> 
            <li><Link to="/contact">Contact Us</Link></li>
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
     

    </div>
  );

}

export default App;
