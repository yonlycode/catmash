import React, { Component } from 'react';
import Axios from 'axios';
import Banner from '../../assets/img/Banner-Scoring.jpg';
const CatTab = React.lazy(() =>import('../../components/Cat-List/CatTab'));
//const Banner = React.lazy(()=>import('../../assets/img/Banner-Scoring.jpg'));

export default class ScorePage extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        this.getBest()
    }

    getBest=()=>{
        Axios.get('/best')
        .catch(err=>alert(err))
        .then(res=>this.setState({
            data : res.data,
        }))
    }
    
    render() {
        return (
            <div>
                <div>
                    <img className="img-responsive" src={Banner} alt="scoring banner" />
                </div>
                <br/>
                <CatTab data={this.state.data} />
            </div>
        )
    }
}
