import { BrowserRouter as Router, Switch,Route ,useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home'
import Explore from './Components/Explore'
import HeplCenter from './Components/HeplCenter'
import Create from './Components/Create'
import Collection from './Components/Collection'
import Details from './Components/Details'
import About from './Components/About'
import Account from './Components/Account'
import Ranking from './Components/Ranking'
import Activity from './Components/Activity'
import Login from './Components/Login'
import MyCollections from './Components/MyCollections'
import CreateCollection from './Components/CreateCollection'
import Settings from './Components/Settings'
import Newsletter from './Components/Newsletter'
import Header from './Components/Elements/Header'
import Footer from './Components/Elements/Footer'
import { useEffect } from 'react';


function App() {

    const history = useHistory();
    useEffect(() => {
        console.log("2");
    }, [history]);
    return (


        <>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/explore" >
                        <Explore />
                    </Route>
                    <Route path="/create" >
                        <Create />
                    </Route>
                    <Route path="/collection" >
                        <Collection />
                    </Route>
                    <Route path="/details" >
                        <Details />
                    </Route>
                    <Route path="/about" >
                        <About />
                    </Route>
                    <Route path="/help-center" >
                        <HeplCenter />
                    </Route>
                    <Route path="/newsletter" >
                        <Newsletter />
                    </Route>
                    <Route path="/account" >
                        <Account />
                    </Route>
                    <Route path="/ranking" >
                        <Ranking />
                    </Route>
                    <Route path="/activity" >
                        <Activity />
                    </Route>
                    <Route path="/login" >
                        <Login />
                    </Route>
                    <Route path="/my-collections" >
                        <MyCollections />
                    </Route>
                    <Route path="/create-collection" >
                        <CreateCollection />
                    </Route>
                    <Route path="/settings" >
                        <Settings />
                    </Route>
                    <Route  >
                        <h3 className="d-flex justify-content-center text-center align-items-center fw-500" style={{ minHeight: "80vh" }}>404 | PAGE NOT FOUND </h3>
                    </Route>
                </Switch>

                <Footer />
            </Router>
        </>
    )
}

export default App;
