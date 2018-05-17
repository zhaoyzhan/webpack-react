import React from "react";
import "./auth.scss";
import {
    Route,
    Redirect,
    HashRouter as Router
} from "react-router-dom";
import {
    BasicHome
} from "../home/home";
import {
    WrappedNornamLoginForm
} from "../login/login";

const AuthExample = () => (
    <Router>
        <div className="container">
            <Route exact path="/" component={WrappedNornamLoginForm}/>
            <Route path="/home" component={BasicHome}/>
        </div>
    </Router>
);

export default AuthExample;