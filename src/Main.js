import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';

class Main extends React.Component{

  render() {
    let beast = [];
    console.log(this.props.data)
    this.props.data.forEach((horned, index)=> {
      beast.push(
        <HornedBeast
        title = {horned.title}
        image_url = {horned.image_url}
        _id = {horned._id}
        description = {horned.description}
        keyword = {horned.keyword}
        horns = {horned.horns}
        key={index}
         />
      )

    })
    return (
      <main>
        {beast}
      </main>
    )
  }
}

export default Main;