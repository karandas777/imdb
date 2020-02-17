import React, { Component } from 'react';


export default class Details extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             movieID:"",
        }
    }

    componentDidMount(){
        window.scrollTo(0,0);
        const id = this.props.match.params.id;
        console.log(id);
    }
    

    render() {
        return (
            <div>
            
            </div>
        )
    }
}
