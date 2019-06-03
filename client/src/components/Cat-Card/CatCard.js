import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import Axios from 'axios';
import VoteButton from '../Buttons/Vote-Button/VoteButton';

const ScoringModal = React.lazy(()=>import('../Modals/Scoring-Modal/ScoringModal'))
const ImageModal = React.lazy(()=>import('../Modals/Image-Modal/ImageModal'))


export default class CatCard extends Component {
    constructor(props){
        super(props)
        this.state={
            scoreModal:false,
            imgModal:false,
            data:{}
        }
    }

    componentDidMount(){
        this.setState({
            data : this.props.data,
        })        
    }

    handleVote =(id)=>{
        Axios.post('/vote-up/'+id)
        .catch(err=>alert(err))
        .then(()=>this.toggleScoreModal())
    }

    closeAndRetry=()=>{
        window.location.reload()
    }

    toggleScoreModal=()=>this.setState(prevS=>{
        return{
        scoreModal:!prevS.scoreModal
    }})

    toggleImageModal=()=>this.setState(prevS=>{
        return{
            imgModal : !prevS.imgModal
        }
    })
    render() {
        const { scoreModal , imgModal , data } = this.state
        return (
            <div className="margin-20">
                {
                    //conditional rendering vore scoring modal
                    scoreModal?<ScoringModal
                        data={data}
                        onReplay={this.closeAndRetry}
                        onShowScore={()=>window.location.href = '/#/score'}
                    />:""
                }
                {
                    //
                    imgModal?<ImageModal
                        img={data.img}
                        onClose={this.toggleImageModal}    
                    />:""
                }
                <Card onClick={this.toggleImageModal}>
                    <div className="center rounded">
                        <CardImg top width="100%" src={data.img} alt={data.name} />
                    </div>
                    <CardBody>
                        <CardTitle>{data.name}</CardTitle>
                        <div className="center">
                            <VoteButton handleClick={()=>this.handleVote(data._id)} />
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
