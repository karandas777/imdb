import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       open:false
    }
  }

  funSetToggle=()=>{
    this.setState({open : !this.state.open})
  }
  

  render() {
    return (
      <div className="container-fluid holder">
        <div className="container py-1">
          <nav className="navbar">
            <Link className="btn text-light p-0" to="/">
              <i className="fa fa-imdb fa-3x"></i>
            </Link>
            <Link className="btn btn-light text-dark rounded-pill ml-auto mr-2" to="/search">
              <i className="fa fa-search"></i>
            </Link>
            <button
              className="navbar-toggler bg-light text-dark px-3 py-2"
              type="button"
              onClick={()=>{this.funSetToggle()}}
            >
              {this.state.open ? (<i className="fa fa-times fa-fw"></i>) : (<i className="fa fa-bars fa-fw"></i>)}
              
            </button>
          </nav>
          {this.state.open ? (
            <div className="hiddenNav">
            <div className="py-3 text-center">
            
                  <Link
                    className="btn btn-light navbtn rounded-pill"
                    to="/trending"
                    onClick={()=>{this.funSetToggle()}}
                  >
                    <i className="fa fa-line-chart fa-fw"></i>{" "}
                    Trending Movies
                  </Link>
                
                  <Link
                    className="btn btn-light navbtn rounded-pill"
                    to="/toprated"
                    onClick={()=>{this.funSetToggle()}}
                  >
                    <i className="fa fa-film fa-fw"></i>{" "}
                     Top Rated Movies
                  </Link>
                
                  <Link
                    className="btn btn-light navbtn rounded-pill"
                    to="/popular"
                    onClick={()=>{this.funSetToggle()}}
                  >
                    <i className="fa fa-thumbs-o-up fa-fw"></i>{" "}
                     Popular Movies
                  </Link>
                
                  <Link className="btn btn-light navbtn rounded-pill" 
                    to="/upcoming"
                    onClick={()=>{this.funSetToggle()}}
                  >
                    <i className="fa fa-rss fa-fw"></i>{" "}
                     Upcoming Movies
                  </Link>

                  <Link className="btn btn-light navbtn rounded-pill" 
                    to="/topRatedSeries"
                    onClick={()=>{this.funSetToggle()}}
                  >
                    <i className="fa fa-diamond fa-fw"></i>{" "}
                     Top Rated Series
                  </Link>

                  <Link className="btn btn-light navbtn rounded-pill" 
                    to="/popularSeries"
                    onClick={()=>{this.funSetToggle()}}
                  >
                    <i className="fa fa-television fa-fw"></i>{" "}
                     Popular Series
                  </Link>

                  <Link className="btn btn-light navbtn rounded-pill" 
                    to="/airingToday"
                    onClick={()=>{this.funSetToggle()}}
                  >
                    <i className="fa fa-podcast fa-fw"></i>{" "}
                     Airing Today
                  </Link>

                  <Link className="btn btn-light navbtn rounded-pill" 
                    to="/aboutToAir"
                    onClick={()=>{this.funSetToggle()}}
                  >
                    <i className="fa fa-clock-o fa-fw"></i>{" "}
                     About to Air
                  </Link>
          
            </div>
          </div>
          ) : null}
          
        </div>
      </div>
    );
  }
}
