import React from "react";

class Header extends React.Component{
  render(){
    return (
      <header>
        <h1>Horned Beast {this.props.hearts}</h1>
      </header>
    )
  }

}

export default Header;