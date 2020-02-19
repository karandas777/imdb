import React, { Component } from 'react';
import Service from './Service';
import Card from './Card';

export default class Similar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            moviesList:[],
            movie:''
        }
    }

    componentDidMount(){
        window.scrollTo(0,0);
        this.funGetMovieName();
        this.funGetSimilar();
    }

    funGetSimilar(){
        const id = this.props.match.params.id;
        const method="/movie/" + id + "/similar";
        const data = new Service();
        data.funGetMethod(method)
        .then((res)=>{
            this.setState({moviesList:res.data.results});
        })
        .catch(()=>{
            this.props.history.push("/error");    
        })
        
    }

    funGetMovieName=()=>{
        const method ="/movie/"+this.props.match.params.id;
        const data = new Service();
        data.funGetMethod(method)
        .then((res)=>{
            this.setState({movie:res.data});
        })
        .catch(()=>{
            this.props.history.push("/error");    
        })
    }

    funGetDetails=(id)=>{
        this.props.history.push(`/details/${id}`);
    }
    
    render() {
        const {moviesList,movie} = this.state;

        if(movie===""){
            return(
                <div className="display-4">Loading...</div>
            )
        }
        else{
            return (
                <div>
                    <div className="display-4 mb-3">Movies Similar to </div>
                    <div className="card p-3 mb-3 text-warning">{movie.title}</div>
                    <div className="row">
                    {
                        moviesList.map((similarmovie)=>(
                        <Card key={similarmovie.id} movie={similarmovie} funGetDetails={this.funGetDetails} />
                        ))
                    }
                    </div>
                </div>
            )
        }
    }
}
