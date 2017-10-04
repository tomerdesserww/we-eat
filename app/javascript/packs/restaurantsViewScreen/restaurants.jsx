import React from 'react'
import Restaurant from "./restaurant";

export default function Restaurants({restaurants}){
    return (
        <div>
            { restaurants.map(item => <Restaurant restaurant={item} key={item.name}/>) }
        </div>
    )
}