import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Header from "./components/header/Headers";
import Landing from "./components/landing/Landing";

class App extends Component {

    render() {
        return (
            <div className="container">
                <Router>
                    <div>
                        <Header/>
                        <Switch>
                            <Route path="/" component={Landing}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;