import React, { Component } from 'react';

class Home extends Component{
    constructor(props){
        super(props);
        //Object.assign({}, state, {score: 2});
        this.state = {apiResponse:"nothing"}
    }

    // callApi() {
    //     fetch("http://localhost:9000/secret")
    //     .then(res => res.text())
    //     .then(res => this.setState({apiResponse : res}))
    //     .catch(err => err);
    // }

    // componentDidMount() {
    //     this.callApi();
    // }

    render(){
        return(
            <div>Home page</div>
        )
        
    }
}
export default Home