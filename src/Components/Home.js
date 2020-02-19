import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Service from './Service';
import env from './Environment';

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
                <div className="display-4">Loading...</div>
            )
        }
        else{
            return (
                <div>
                    <div className="display-4 mb-4"><i className="fa fa-home"></i> Home</div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                                <Link to="/trending" className="text-light text-decoration-none">
                                    <div className="rounded holder p-2 m-0 row">
                                        <div className="col-5 p-0">
                                            <img className="homeimg rounded" alt="1" src={env.imgPath + trendingmovie.poster_path} />
                                        </div>
                                        <div className="col-7">
                                            <div className="moviecat">Trending Movies</div>        
                                        </div>
                                    
                                    </div>
                                </Link>
                        </div>
                        <div className="col-md-6 mb-4">
                                <Link to="/toprated" className="text-light text-decoration-none">
                                    <div className="rounded holder p-2 m-0 row">
                                        <div className="col-5 p-0">
                                            <img className="homeimg rounded" alt="2" src={env.imgPath + topratedmovie.poster_path} />
                                        </div>
                                        <div className="col-7">
                                            <div className="moviecat">Top-Rated Movies</div>        
                                        </div>
                                    
                                    </div>
                                </Link>
                        </div>
                        <div className="col-md-6 mb-4">
                                <Link to="/popular" className="text-light text-decoration-none">
                                    <div className="rounded holder p-2 m-0 row">
                                        <div className="col-5 p-0">
                                            <img className="homeimg rounded" alt="3" src={env.imgPath + popularmovie.poster_path} />
                                        </div>
                                        <div className="col-7">
                                            <div className="moviecat">Popular Movies</div>        
                                        </div>
                                    
                                    </div>
                                </Link>
                        </div>
                        <div className="col-md-6 mb-4">
                                <Link to="/upcoming" className="text-light text-decoration-none">
                                    <div className="rounded holder p-2 m-0 row">
                                        <div className="col-5 p-0">
                                            <img className="homeimg rounded" alt="4" src={env.imgPath + upcomingmovie.poster_path} />
                                        </div>
                                        <div className="col-7">
                                            <div className="moviecat">Upcoming Movies</div>        
                                        </div>
                                    
                                    </div>
                                </Link>
                        </div>
                    </div>
                </div>
            )
        }
        
    }
}
