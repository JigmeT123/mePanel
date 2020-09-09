import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Service';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact="exact" path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/services" component={Services}/>
                </Switch>

            </div>
        </Router>

    );
}

export default App;
