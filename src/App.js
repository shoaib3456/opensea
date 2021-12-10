import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home'
import Explore from './Components/Explore'
import Create from './Components/Create'
import Collection from './Components/Collection'
import Details from './Components/Details'
import About from './Components/About'
import Header from './Components/Elements/Header'
import Footer from './Components/Elements/Footer'


function App() {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/explore" >
                        <Explore/>
                    </Route>
                    <Route path="/create" >
                        <Create/>
                    </Route>
                    <Route path="/collection" >
                        <Collection/>  
                    </Route>
                    <Route path="/details" >
                        <Details/>
                    </Route>
                    <Route path="/about" >
                        <About/>
                    </Route>
                    <Route  >
                        <h3 className="d-flex justify-content-center text-center align-items-center fw-500" style={{minHeight:"80vh"}}>404 | PAGE NOT FOUND </h3>
                    </Route>
                </Switch>

                <Footer />
            </Router>
        </>
    )
}

export default App;
