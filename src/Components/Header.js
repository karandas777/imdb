import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="container-fluid holder">
        <div className="container py-1">
          <nav className="navbar">
            <Link className="btn text-light p-0" to="/">
              <i className="fa fa-imdb fa-3x"></i>
            </Link>
            <button
              className="navbar-toggler bg-light text-dark px-3 py-2"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
            >
              <i className="fa fa-bars"></i>
            </button>
          </nav>
          <div className="collapse" id="navbarToggleExternalContent">
            <div className="p-3 text-center">
            
                  <Link
                    className="btn btn-light navbtn rounded-pill"
                    to="/trending"
                  >
                    <i className="fa fa-line-chart fa-fw"></i>{" "}
                    Trending Movies
                  </Link>
                
                  <Link
                    className="btn btn-light navbtn rounded-pill"
                    to="/toprated"
                  >
                    <i className="fa fa-film fa-fw"></i>{" "}
                     Top Rated Movies
                  </Link>
                
                  <Link
                    className="btn btn-light navbtn rounded-pill"
                    to="/popular"
                  >
                    <i className="fa fa-thumbs-o-up fa-fw"></i>{" "}
                     Popular Movies
                  </Link>
                
                  <Link className="btn btn-light navbtn rounded-pill" 
                    to="/upcoming"
                  >
                    <i className="fa fa-rss fa-fw"></i>{" "}
                     Upcoming Movies
                  </Link>

                  <Link className="btn btn-light navbtn rounded-pill" 
                    to="/topRatedSeries"
                  >
                    <i className="fa fa-diamond fa-fw"></i>{" "}
                     Top Rated Series
                  </Link>

                  <Link className="btn btn-light navbtn rounded-pill" 
                    to="/popularSeries"
                  >
                    <i className="fa fa-television fa-fw"></i>{" "}
                     Popular Series
                  </Link>

                  <Link className="btn btn-light navbtn rounded-pill" 
                    to="/airingToday"
                  >
                    <i className="fa fa-podcast fa-fw"></i>{" "}
                     Airing Today
                  </Link>

                  <Link className="btn btn-light navbtn rounded-pill" 
                    to="/aboutToAir"
                  >
                    <i className="fa fa-clock-o fa-fw"></i>{" "}
                     About to Air
                  </Link>
          
            </div>
          </div>
        </div>
      </div>
    );
  }
}
