import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="container-fluid holder">
        <div className="container py-1">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="btn text-light p-0" to="/">
              <i className="fa fa-imdb fa-3x"></i>
            </Link>
            <button
              className="navbar-toggler bg-light"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link
                    className="btn btn-light navbtn rounded-pill mr-3"
                    to="/trending"
                  >
                    <i className="fa fa-line-chart fa-fw"></i>{" "}
                    Trending
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="btn btn-light navbtn rounded-pill mr-3"
                    to="/toprated"
                  >
                    <i className="fa fa-film fa-fw"></i>{" "}
                     Top Rated
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="btn btn-light navbtn rounded-pill mr-3"
                    to="/popular"
                  >
                    <i className="fa fa-thumbs-o-up fa-fw"></i>{" "}
                     Popular
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-light navbtn rounded-pill" to="/upcoming">
                    <i className="fa fa-rss fa-fw"></i>{" "}
                     Upcoming
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
