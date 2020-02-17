import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="display-4 mb-3">Home</div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="rounded holder p-3">
                            <div><Link to="/trending" className="h1 text-light">Trending Movies</Link></div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                    <div className="rounded holder p-3">
                            <div><Link to="/toprated" className="h1 text-light">Top-Rated Movies</Link></div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                    <div className="rounded holder p-3">
                            <div><Link to="/popular" className="h1 text-light">Popular Movies</Link></div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                    <div className="rounded holder p-3">
                            <div><Link to="/upcoming" className="h1 text-light">Upcoming Movies</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
