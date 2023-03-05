import React from 'react';
import Main from './Main';
import Header from './Header';
import HornedBeast from './HornedBeast';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal'
import data from './data.json'
import './App.css';
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      hearts: '',
      showModal: true,
      personName: ''
    }
  }

  addHearts = () => {
    this.setState({
      hearts: this.state.hearts + '💙'
    });
  }
  handleOpenModal=(name, description, image_url) => {
    this.setState({
      showModal: true,
      personName: name
    });
  }

  handleCloseModal=() => {
    this.setState({
      showModal: false
    });

}

  
  render(){
    
    return(
      <>
          <Header hearts ={this.state.hearts}/>
          <p onClick={this.handleOpenModal}>testing</p>
          <Main data = {data} 
          addHearts = {this.addHearts}
          handleOpenModal = {this.handleOpenModal}
          />
          <HornedBeast/>
          <Modal
          show={this.state.showModal} 
          onHide={this.handleCloseModal}>
            <Modal.Header>
              <Modal.Title>{this.state.personName}</Modal.Title>
            </Modal.Header>

          </Modal>
          <Footer/>
         </>
    );
  }
}

export default App; 

