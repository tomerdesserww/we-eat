import React from 'react'
import Header from "./header";
import Body from "./body";

export default class Layout extends React.Component{
    constructor(){
        super();
        this.state = {
            restaurants: []
        }
    }

    setRestaurants(restaurants) {
        this.setState({restaurants});
    }

    render(){
        return (
            <div>
                <Header/>
                <Body setRestaurants={this.setRestaurants.bind(this)} restaurants={this.state.restaurants}/>
            </div>
        )
    }
}