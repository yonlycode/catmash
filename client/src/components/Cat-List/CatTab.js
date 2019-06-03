import React from 'react'
import { Table } from 'reactstrap';

const Item = React.lazy(() =>import('./CatListItem') )
export default function CatTab(props) {
    return (
        <Table striped bordered hover responsive>
            <thead className="text-center">
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Votes</th>
                    <th>Image</th>                    
                </tr>
            </thead>
            <tbody className="text-center">
                {props.data.map((v , i)=>{
                    return <Item key={i} index={i+1} data={v}/>
                })}
            </tbody>
        </Table>
    )
}
