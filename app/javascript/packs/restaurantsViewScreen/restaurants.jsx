import React from 'react'
import Restaurant from "./restaurantLine";

export default function Restaurants({restaurants}){
    return (
        <div>
            { restaurants.map(item => <Restaurant restaurant={item} key={item.name}/>) }
        </div>
    )
}
