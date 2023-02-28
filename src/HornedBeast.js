import React from "react";
import App from "./App";

class HornedBeast extends React.Component{
  render(){
    return(
      <article> 
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <img alt = {this.props.alt} src = {this.props.imgUrl}/>
      </article>
    )
  }
}

export default HornedBeast; 