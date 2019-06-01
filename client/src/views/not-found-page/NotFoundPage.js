import React, { Component } from 'react';
import NotFoundBanner  from '../../assets/img/notfound.png'

export default class NotFoundPage extends Component {
    render() {
        return (
            <div className="center">
                <img style={{textAlign:"center"}} src={NotFoundBanner} alt="not found page banner image" />
            </div>
        )
    }
}
