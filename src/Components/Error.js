import React, { Component } from 'react'

export default class Error extends Component {
    render() {
        return (
            <div className="display-4 holder p-4 text-center rounded my-5">
                <i classname="fa fa-exclamation-triangle mr-3"></i>
                <div className="h6 my-3">Something went wrong!</div>
                <div className="h6 mt-3">Try navigating to other page</div>
            </div>
            
        )
    }
}
