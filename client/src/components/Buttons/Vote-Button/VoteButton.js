import React from 'react';
import {Button} from 'reactstrap';

export default function VoteButton(props) {
    return (
        <Button onClick={props.handleClick} color="success"><i className="fas fa-dove"></i> I'm the cutest</Button>
    )
}
