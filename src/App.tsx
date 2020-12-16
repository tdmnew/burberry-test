import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/App.scss";

import Episodes from "./components/episodes/Episodes";
import Show from "./components/shows/Show";

const navBar = () => {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link to="show">Show Information</Link>
                </li>
                <li>
                    <Link to="episodes">Episode List</Link>
                </li>
            </ul>
        </div>
    );
};

export default function App() {
    return (
        <div className="App">
            <div className="dashboard">
                <Router>
                    { navBar() }
                    <Switch>
                        <Route exact path="/" component={Show} />
                        <Route path="/show" component={Show} />
                        <Route path="/episodes" component={Episodes} />
                    </Switch>
                </Router>
            </div>
        </div>
    );
}
