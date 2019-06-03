import React, { Component } from 'react'
import { Button } from "reactstrap"

const ImageModal = React.lazy(()=>import('../Modals/Image-Modal/ImageModal'))

export default class CatListItem extends Component {
    constructor(props){
        super(props);
        this.state={
            data : {},
            imgModal:false
        }
    }
    componentDidMount(){
        this.setState({
            data : this.props.data
        })
    }
    toggleModal=()=>{
        this.setState(prevS=>{
            return{
                imgModal: !prevS.imgModal
            }
        })
    }
    crownColor = (place) =>{
        if(place===1){
            return "yellow"

        }
        if(place===2){
            return "grey"
        }
        if(place===3){
            return "orange"
        }
        else{
            return ""
        }
    }
    render() {
        const { index } = this.props;
        const { data, imgModal } = this.state
        return (
            <tr>
                <th>
                    {
                        //rendering modal image
                        imgModal?<ImageModal onClose={this.toggleModal} img={data.img} alt={data.name}/>:""
                    }
                    {
                        //conditional rendering frow crown icons (only first 1st 2nd 3d)
                        index===1||index===2||index===3? <i className="fas fa-crown" style={{color:index===1||index===2||index===3?this.crownColor(index):null}}></i>: ""
                    }
                    {index}</th>
                <td>{data.name}</td>
                <td>{data.vote}</td>
                <td> <Button onClick={this.toggleModal} >Show</Button> </td>
            </tr>
        )
    }
}
