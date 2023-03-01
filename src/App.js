import React from 'react';
import Main from './Main';
import Header from './Header';
import HornedBeast from './HornedBeast';
import Footer from './Footer';
import data from './data.json'
import './App.css';
class App extends React.Component {
  
  render(){
    
    return(
      <>
          <Header/>
          <Main data = {data}/>
          <HornedBeast/>
          <Footer/>
         </>
    );
  }
}

export default App; 

