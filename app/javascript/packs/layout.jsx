import React from 'react'
import Header from "./header";
import Body from "./body";

export default class Layout extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                <Body/>
            </div>
        )
    }
}