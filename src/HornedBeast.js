import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


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
  render() {
    return (
      <Card className="hornedBeast">
        <Card.Img
          variant="top"
          src={this.props.image_url}
          alt={this.props._id}
          onClick={this.handleFavorites}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <div style={{ display: "flex", justifyContent: "space-around" }}>

          </div>
          <p> ❤  {this.state.favorites}</p>
          <Button variant="primary" onClick={this.handleFavorites}>FAVORITE: ❤️ </Button>
        </Card.Body>
      </Card>
    );
  }
}




export default HornedBeast; 



// style={{ margin: "0 auto", width: "%", height: "100%" }}