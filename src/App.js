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
import ErrorC from './Components/Error';
import {Provider} from './Components/Context'; 
import { createBrowserHistory } from "history";
import TopRatedSeries from './Components/TopRatedSeries';
import PopularSeries from './Components/PopularSeries';
import SeriesDetails from './Components/SeriesDetails';
import SeriesSimilar from './Components/SeriesSimilar';
import AboutToAir from './Components/AboutToAir';
import AiringToday from './Components/AiringToday';

const newHistory = createBrowserHistory();

function App() {
  return (
    <Provider history={newHistory} >
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
        <Route exact path="/error" component={ErrorC} />
        <Route exact path="/topRatedSeries" component={TopRatedSeries} />
        <Route exact path="/popularSeries" component={PopularSeries} />
        <Route exact path="/airingToday" component={AiringToday} />
        <Route exact path="/aboutToAir" component={AboutToAir} />
        <Route exact path="/seriesDetails/:id" component={SeriesDetails} />
        <Route exact path="/seriesSimilar/:id" component={SeriesSimilar} />
      </div>
      <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
