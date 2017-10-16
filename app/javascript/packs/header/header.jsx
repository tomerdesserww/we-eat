import React from 'react';
import Link from 'react-router-dom/es/Link';

export default class Header extends React.Component {
  items = [{name: 'Select', url: '/'}, {name: 'Create', url: 'create'}]

  state ={
    selected: this.items[0].name
  }

  updateSelected = (e) => {
    this.setState({selected: e.target.text})
  }

  isSelected = (itemName) =>{
    return (itemName == this.state.selected ? ' selected' : '')
  }

  render(){
    return (
      <div className='menu'>
        { this.items.map(item => <Link className={'menu-item' + this.isSelected(item.name)}
                                       to={item.url}
                                       onClick={this.updateSelected}
                                       key={item.name}><span>{item.name}</span></Link>) }
      </div>
    );
  }

}
