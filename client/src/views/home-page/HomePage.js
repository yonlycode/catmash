import React, { Component } from 'react';
import axios from 'axios';
import ActivityIndicator from '../../components/Activity-Indactor/ActivityIndicator'
import { Row, Col} from 'reactstrap'
const CatCard = React.lazy(()=>import('../../components/Cat-Card/CatCard'))
export default class HomePage extends Component {

    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        this.getMatch()
    }

    
    getMatch=()=>{
        axios.get('/match')
        .catch(err=>alert(err))
        .then(res=>this.setState({
            data : res.data,
        }))
    }
    render(){
        const {data} = this.state;

        //if array is empty @card will display activity indicator else will map the array with cat-card
        const cards = data.length ===0?<ActivityIndicator/>:data.map((v, i)=>{
            //
            return <Col sm={{ size: 'auto', offset: 1 }}><CatCard key={i} data={v} /></Col>
        })

        return (
            <div>
                <h1>Home page</h1>
                <Row >
                    {cards}
                </Row>
            </div>
        )
    }
}
