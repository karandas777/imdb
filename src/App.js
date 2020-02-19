import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Header from './Components/Header';
import Home from "./Components/Home";
import Trending from './Components/Trending';
import TopRated from "./Components/TopRated";
import Popular from "./Components/Popular";
import Upcoming from "./Components/Upcoming";
import Footer from './Components/Footer';
import Details from './Components/Details';
import Similar from './Components/Similar';
import Error from './Components/Error';

function App() {
  return (

    <Router>
      <Header/>
      <div className="container py-4">
        <Route exact path="/" component={Home} />
        <Route exact path="/trending" component={Trending} />
        <Route exact path="/toprated" component={TopRated} />
        <Route exact path="/popular" component={Popular} />
        <Route exact path="/upcoming" component={Upcoming} />
        <Route exact path="/details/:id" component={Details} />
        <Route exact path="/similar/:id" component={Similar} />
        <Route exact path="/error" component={Error} />
      </div>
      <Footer/>
    </Router>
    
  );
}

export default App;
