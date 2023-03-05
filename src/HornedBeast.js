import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SelectedBeast from "./SelectedBeast";



class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0
    }
  }
  handleFavorites = () => {
    //when the user clocks on "🖤" updates value of this.state.likes 
    this.setState({
      favorites: this.state.favorites + 1,
    });

  }
  // handleNameClick = () =>{
  //   this.props.handleOpenModal,
  //   this.props.title,
  //   this.props.description,
  //   this.props.image_url


  // }
  render() {
    return (
      <Card className="hornedBeast" >
        <Card.Img
          variant="top"
          src={this.props.image_url}
          alt={this.props.title}
          // onClick={this.handleFavorites}
          onClick={this.props.addHearts}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <div style={{ display: "flex", justifyContent: "space-around" }}>

          </div>
          <p> ❤  {this.state.favorites}</p>
          <Button variant="primary" onClick={this.handleFavorites}>FAVORITE: ❤️ </Button>
         
          <SelectedBeast
            src={this.state.Src}
            alt={this.state.Alt}
            title={this.state.Title}
            description={this.state.Description}
            liked={this.state.liked}
            handleClick={this.handleClick}
          />

        </Card.Body>
      </Card>
    );
  }
}



export default HornedBeast; 





