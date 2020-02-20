import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Service from './Service';
import env from './Environment';
import Loader from 'react-loader-spinner';

export default class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            trendingmovie:"",
            topratedmovie:"",
            popularmovie:"",
            upcomingmovie:"",
        }
    }

    componentDidMount(){
        window.scrollTo(0,0);
        this.funGetTrending();
        this.funGetTopRated();
        this.funGetPopular();
        this.funGetUpcoming();
    }
    
    funGetTrending(){

        const method="/trending/movie/week";
        const data = new Service();
        data.funGetMethod(method)
        .then((res)=>{
            this.setState({trendingmovie:res.data.results[0]});
        })
        .catch(()=>{
            this.props.history.push("/error");    
        })
        
    }

    funGetTopRated(){

        const method="/movie/top_rated";
        const data = new Service();
        data.funGetMethod(method)
        .then((res)=>{
            this.setState({topratedmovie:res.data.results[0]});
        })
        .catch(()=>{
            this.props.history.push("/error");    
        })
        
    }

    funGetPopular(){

        const method="/movie/popular";
        const data = new Service();
        data.funGetMethod(method)
        .then((res)=>{
            this.setState({popularmovie:res.data.results[0]});
        })
        .catch(()=>{
            this.props.history.push("/error");    
        })
        
    }

    funGetUpcoming(){

        const method="/movie/upcoming";
        const data = new Service();
        data.funGetMethod(method)
        .then((res)=>{
            this.setState({upcomingmovie:res.data.results[0]});
        })
        .catch(()=>{
            this.props.history.push("/error");    
        })
        
    }

    render() {
        const {trendingmovie,topratedmovie,popularmovie,upcomingmovie} = this.state;
        if (trendingmovie ==="" || topratedmovie ==="" || popularmovie ==="" || upcomingmovie ===""){
            return(
                <div className="display-4 my-5 text-center">
                <Loader
                type="BallTriangle"
                color="#8e54e9"
                height={100}
                width={100}
                />
                </div>
            )
        }
        else{
            return (
                <div>
                    <div className="display-4 mb-4">IMDb.</div>
                    <div className="row">
                        <div className="col-md-3 mb-4">
                                <Link to="/trending" className="text-light text-decoration-none">
                                    <div className="rounded holder p-2 m-0">
                                        <img className="homeimg rounded w-100" alt="1" src={env.imgPath + trendingmovie.poster_path} />
                                        <div className="h4 text-center mt-3">Trending Movies</div>        
                                    </div>
                                </Link>
                        </div>
                        <div className="col-md-3 mb-4">
                                <Link to="/toprated" className="text-light text-decoration-none">
                                    <div className="rounded holder p-2 m-0">
                                        <img className="homeimg rounded w-100" alt="2" src={env.imgPath + topratedmovie.poster_path} />
                                        <div className="h4 text-center mt-3">Top-Rated Movies</div>        
                                    </div>
                                </Link>
                        </div>
                        <div className="col-md-3 mb-4">
                                <Link to="/popular" className="text-light text-decoration-none">
                                    <div className="rounded holder p-2 m-0">
                                        <img className="homeimg rounded w-100" alt="3" src={env.imgPath + popularmovie.poster_path} />
                                        <div className="h4 text-center mt-3">Popular Movies</div>        
                                    </div>
                                </Link>
                        </div>
                        <div className="col-md-3 mb-4">
                                <Link to="/upcoming" className="text-light text-decoration-none">
                                    <div className="rounded holder p-2 m-0">
                                        <img className="homeimg rounded w-100" alt="1" src={env.imgPath + upcomingmovie.poster_path} />
                                        <div className="h4 text-center mt-3">Upcoming Movies</div>        
                                    </div>
                                </Link>
                        </div>
                    </div>
                </div>
            )
        }
        
    }
}
