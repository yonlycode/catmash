import React from 'react'
import { Table } from 'reactstrap';

const Item = React.lazy(() =>import('./CatListItem') )
export default function CatTab(props) {
    return (
        <Table>
            <thead className="text-center">
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Vote</th>
                    <th>Img</th>                    
                </tr>
            </thead>
            <tbody className="text-center">
                {props.data.map((v , i)=>{
                    return <Item index={i+1} data={v} />
                })}
            </tbody>
        </Table>
    )
}
