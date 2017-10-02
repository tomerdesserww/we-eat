import React from 'react'

export default class Body extends React.Component{

    componentDidMount(){
        var a = this.props
        Rails.ajax({
            url: '/restaurants',
            type: 'GET',
            success: function(response){
                a.setRestaurants(response)
            }
        })
    }

    render(){
        var restaurantsList = this.props.restaurants.map((item) => {
            return (
                <li key={item.name}>
                    <span>{item.name}</span>
                </li>
            )
        })

        return (
            <div>
                <ul>
                    {restaurantsList}
                </ul>
            </div>
        )
    }
}