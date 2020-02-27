import React, { Component } from 'react';
import Service from './Service';
import Loader from 'react-loader-spinner';
import SeriesCard from './SeriesCard';

export default class SeriesSimilar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            seriesList:[],
            series:''
        }
    }

    componentDidMount(){
        window.scrollTo(0,0);
        this.funGetMovieName();
        this.funGetSimilar();
    }

    funGetSimilar(){
        const id = this.props.match.params.id;
        const method="/tv/" + id + "/similar";
        const data = new Service();
        data.funGetMethod(method)
        .then((res)=>{
            this.setState({seriesList:res.data.results});
        })
        .catch(()=>{
            this.props.history.push("/error");    
        })
        
    }

    funGetMovieName=()=>{
        const method ="/tv/"+this.props.match.params.id;
        const data = new Service();
        data.funGetMethod(method)
        .then((res)=>{
            this.setState({series:res.data});
        })
        .catch(()=>{
            this.props.history.push("/error");    
        })
    }

    funGetDetails=(id)=>{
        this.props.history.push(`/seriesDetails/${id}`);
    }
    
    render() {
        const {seriesList,series} = this.state;

        if(seriesList.length===0){
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
                    <div className="display-4 mb-3">Series Similar to </div>
                    <div className="card p-3 mb-3 text-warning">{series.name}</div>
                    <div className="row">
                    {
                        seriesList.map((similarSeries)=>(
                        <SeriesCard key={similarSeries.id} series={similarSeries} funGetDetails={this.funGetDetails} />
                        ))
                    }
                    </div>
                </div>
            )
        }
    }
}
