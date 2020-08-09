import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import IndexApp from "./pages/index/IndexApp";
import "./app.scss";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={"/"}>
                    <IndexApp/>
                </Route>
                <Route>
                    404
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
