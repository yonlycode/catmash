import React from 'react'

export default function CatListItem(props) {
    console.log(props.key)
    return (
        <tr>
            <th>{props.index}</th>
            <td>{props.data.name}</td>
            <td>{props.data.vote}</td>
            <td> <a target="_blank" rel="noopener noreferrer" href={props.data.img}> photo</a> </td>
        </tr>
    )
}
