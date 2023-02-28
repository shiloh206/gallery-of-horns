import React from 'react';
import App from './App';
import HornedBeast from './HornedBeast.js';

class Main extends React.Component{

  render() {
    return (
      <main>
        <HornedBeast
         title = ""
         imgUrl = "link"
         description = 'description'
        >
        <p></p>  
        </HornedBeast>

        <HornedBeast
          title = ""
          imgUrl = "link"
          description = 'description'
         >
          

        </HornedBeast>

        <HornedBeast
           title = ""
           imgUrl = "link"
           description = "description"
          >

        </HornedBeast>

      </main>
    )
  }
}

export default Main;