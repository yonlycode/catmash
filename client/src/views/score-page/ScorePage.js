import React, { Component } from 'react'
import Axios from 'axios';
const CatTab = React.lazy(() =>import('../../components/Cat-List/CatTab'))

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
        console.log(this.state)
        return (
            <div>
                <h1 className="text-center">The Best Cats :</h1>
                <br/>
                <CatTab data={this.state.data} />
            </div>
        )
    }
}
