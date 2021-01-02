import React from "react";
import "./styles.css";
import Navbar from "./components/navbar";
import SocketChatApp from "./components/socketChatApp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <header></header>
        <nav>
          <div className="site-brand">
            <Link to="/">
              <p>XPLi-oT | socket</p>
            </Link>
          </div>
          <Navbar />
        </nav>
        <content className="w3-card">
          <Switch>
            <Route exact path="/">
              <section>Section Left</section>
              <main>
                <SocketChatApp />
              </main>
              <section>Section Right</section>
            </Route>
          </Switch>
        </content>
        <footer>
          <p>Footer</p>
        </footer>
      </div>
    </Router>
  );
}
