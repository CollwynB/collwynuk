import Home from './components/home/Home.jsx'
import Asteroids from "./components/asteroids/Asteroids.jsx"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Banner from "./components/banner/Banner.jsx"
import './App.css';

function App() {
  return (
    <Router className="App">
      <Banner></Banner>
      <div className="content">
        <Switch >
          <Route path="/asteroids" exact>
            {window.innerWidth < 1260 || window.innerHeight < 700 ? "Sorry this content isn't available on your screen size" : <Asteroids></Asteroids>}
          </Route>
          <Route path="/" exact>
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
