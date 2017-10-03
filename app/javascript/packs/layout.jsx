import React from 'react'
import Header from "./header";
import Restaurants from "./Restaurants";

function get(url){
    return fetch(url)
        .then(response => response.json())
}

export default class Layout extends React.Component {
    state = {
        restaurants: []
    };

    setRestaurants = (restaurants) => {
        this.setState({ restaurants });
    };

    componentDidMount(){
        get('/restaurants')
            .then(this.setRestaurants)
            .catch(console.error)
    }

    render(){
        return (
            <div>
                <Header/>
                <Restaurants setRestaurants={this.setRestaurants} restaurants={this.state.restaurants}/>
            </div>
        )
    }
}
