import React from 'react'
import {Button} from 'reactstrap';

export default function ScoreButton(props) {
    return (
        <Button onClick={props.handleClick} color="warning">
            <i className="fas fa-award"></i>
            {" "}The Score
        </Button>
    )
}