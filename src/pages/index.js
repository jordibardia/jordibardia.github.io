import React from "react";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import HomePage from "./homepage";
//import Projects from "./projects";

const Pages = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
        </Switch>
    </BrowserRouter>
);

export default Pages;