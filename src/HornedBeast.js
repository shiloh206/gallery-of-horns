import React from "react";

class HornedBeast extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      likes: 0
    };
  }
  handleLikes = () => {
    //when the user clocks on "🖤" updates value of this.state.likes 
    this.setState({
      likes: this.state.likes + 1,
    });

  }
  render(){
    return(
      <article className="hornedBeast"> 
        {this.props._id}
        <h2>{this.props.title}
        </h2>
        <p>{this.props.description} 
        </p>
        <p>{this.state.waves}likes</p>
        <p onClick={this.handleLikes}>🖤</p>
        Horns{this.props.horns}
        <img alt = {this.props.alt} src =
        {this.props.image_url}/>
      </article>
    )
  }
}

export default HornedBeast; 