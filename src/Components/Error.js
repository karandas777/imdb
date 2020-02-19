import React, { Component } from 'react'

export default class Error extends Component {
    render() {
        return (
            <div className="display-4 holder p-4 text-center rounded my-5">
                <i class="fa fa-exclamation-triangle mr-3"></i>
                Something went wrong.
            </div>
        )
    }
}
