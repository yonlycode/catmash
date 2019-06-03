import React from 'react'
import {Button} from 'reactstrap';

export default function ReplayButton(props) {
    return (
        <Button onClick={props.handleClick} color="success">
            <i className="fas fa-redo-alt"></i>
            {" "}Let's do it again
        </Button>
    )
}
