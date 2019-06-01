import React from 'react'
import { Card, CardImg, CardBody, CardTitle, Button} from 'reactstrap'
export default function CatCard(props) {
    console.log("data : "+props.data)
    return (
        <div>
            <Card>
                <CardImg top width="100%" src={props.data.img} alt={props.data.name} />
                <CardBody>
                    <CardTitle>{props.data.name}</CardTitle>
                    <div className="center">
                        <Button>Button</Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}
