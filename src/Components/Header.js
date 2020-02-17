import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className="container-fluid holder">
                <div className="container py-1">
                    <div className="row">
                        <div className="col-2">
                            <Link className="btn text-light p-0" to="/">
                                <i className="fa fa-imdb fa-3x"></i>
                            </Link>
                        </div>
                        <div className="col-10 text-right py-2">
                            <Link className="btn btn-light rounded-pill mr-3" to="/trending">
                            <i className="fa fa-line-chart fa-fw"></i> <span className="cat"> Trending</span>
                            </Link>
                            <Link className="btn btn-light rounded-pill mr-3" to="/toprated">
                            <i className="fa fa-film fa-fw"></i> <span className="cat"> Top Rated</span> 
                            </Link>
                            <Link className="btn btn-light rounded-pill mr-3" to="/popular">
                            <i className="fa fa-thumbs-o-up fa-fw"></i> <span className="cat"> Popular</span> 
                            </Link>
                            <Link className="btn btn-light rounded-pill" to="/upcoming">
                            <i className="fa fa-rss fa-fw"></i> <span className="cat"> Upcoming</span> 
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
