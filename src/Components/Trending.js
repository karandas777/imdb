import React, { Component } from 'react';
import Service from './Service';
import Card from './Card';
import Loader from 'react-loader-spinner';

export default class Trending extends Component {
    constructor(props) {
        super(props)

        this.state = {
            moviesList:[],
        }
    }

    componentDidMount(){
        window.scrollTo(0,0);
        this.funGetMovies();
    }

    funGetMovies(){

        const method="/trending/movie/week";
        const data = new Service();
        data.funGetMethod(method)
        .then((res)=>{
            this.setState({moviesList:res.data.results});
        })
        .catch(()=>{
            this.props.history.push("/error");    
        })
        
    }

    funGetDetails=(id)=>{
        this.props.history.push(`/details/${id}`);
    }
    
    render() {
        const {moviesList} = this.state;

        if(moviesList.length === 0){
            return (
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
                    <div className="display-4 mb-3">Movies Trending this week <i className="fa fa-line-chart"></i></div>
                    <div className="row">
                    {
                        moviesList.map((movie)=>(
                        <Card key={movie.id} movie={movie} funGetDetails={this.funGetDetails}/>
                        ))
                    }
                    </div>
                </div>
            )
        }
        
    }
}
