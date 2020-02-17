import React, { Component } from 'react';
import Service from './Service';
import Card from './Card';

export default class Trending extends Component {
    constructor(props) {
        super(props)

        this.state = {
            moviesList:[],
        }
    }

    componentDidMount(){
        this.funGetMovies();
    }

    funGetMovies(){

        const method="/trending/movie/week";
        const data = new Service();
        data.funGetMethod(method)
        .then((res)=>{
            console.log(res.data.results);
            this.setState({moviesList:res.data.results});
        })
        
    }

    funGetDetails=(id)=>{
        console.log(id)
        this.props.history.push(`/details/${id}`);
    }
    
    render() {
        const {moviesList} = this.state;
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
