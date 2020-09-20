import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Service';
import Footer from './Components/footer/Footer';
import Payment from './Components/Payment/payment';
import Terms from './Components/terms/Terms';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/services" component={Services}/>
                    <Route path="/payment" component={Payment} />
                    <Route path="/terms" component={Terms} />
                </Switch>
                <Footer />

            </div>
        </Router>

    );
}

export default App;
