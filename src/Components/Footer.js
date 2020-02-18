import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div className="container-fluid holder text-light">
        <div className="container pt-3 pb-5">
          <div className="row pt-5 pb-5">
            <div className="col-md-4 pt-3 pb-3">
              <p className="h2">
                <button className="btn p-0">
                  <i className="fa fa-imdb fa-5x text-light"></i>
                </button>
              </p>
              <p className="mb-5 mt-5 pr-5 mr-5">
                Internet Movie Database.
              </p>

              <p className="text-light h4">
                <span className="mr-4">
                  <i className="fa fa-facebook"></i>
                </span>
                <span className="mr-4">
                  <i className="fa fa-google-plus"></i>
                </span>
                <span className="mr-4">
                  <i className="fa fa-linkedin"></i>
                </span>
                <span className="mr-4">
                  <i className="fa fa-twitter"></i>
                </span>
                <span className="mr-4">
                  <i className="fa fa-instagram"></i>
                </span>
              </p>
            </div>
            <div className="col-md-3 pt-3 pb-3">
              <h4 className="text-light">Navigate</h4>
              <ul className="list-group mt-4 ml-3">
                <li>
                  <Link className="text-light nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-light nav-link" to="/trending">
                    Trending
                  </Link>
                </li>
                <li>
                  <Link className="text-light nav-link" to="/toprated">
                    Top-Rated
                  </Link>
                </li>
                <li>
                  <Link className="text-light nav-link" to="/popular">
                    Popular
                  </Link>
                </li>
                <li>
                  <Link className="text-light nav-link" to="/upcoming">
                    Upcoming
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-5 pt-3 pb-3">
              <h4 className="text-light">Our Newsletter</h4>
              <p className="mt-4">
                Subscribe to our newsletter to get the latest News and offers..!
              </p>
              <div className="mt-4">
                <input
                  type="text"
                  className="form-control rounded-pill"
                  placeholder="Email Address"
                />
                <br />
                <button
                  type="button"
                  className="btn btn-light mt-3 rounded-pill w-25"
                >
                  GO
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center p-4 text-light">&copy; IMDB India 2020 /// Developer : Karan Das</div>
      </div>
    );
  }
}
