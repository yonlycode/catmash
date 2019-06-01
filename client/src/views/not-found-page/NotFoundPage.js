import React, { Component } from 'react';
import NotFoundBanner  from '../../assets/img/notfound.png'

export default class NotFoundPage extends Component {
    render() {
        return (
            <div>
                <div className="row center">
                    <img style={{textAlign:"center"}} src={NotFoundBanner} className="responsive-img" alt="not found page banner image" />
                </div>
                <br/><br/>
                <div className="row center">
                    <a className="btn btn-primary" href="/">Back to Home</a> 
                </div>
            </div>
        )
    }
}
