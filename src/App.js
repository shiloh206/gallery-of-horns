//import
import React from 'react';
import './App.css';
import data from "./data.json";
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import BeastDisp from './Modal';
import SelectedBeast from './SelectedBeast';
import { Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

//extend
class App extends React.Component {
 
  constructor(props){
    super(props)
    this.state={
      modalDisp: false,
      beastToDisp: {},
      beastsByHorns: data,
    }
  }
 
  stopModal = () => this.setState({modalDisp: false});

  startModal = (key) => {
    let selectedBeast = data.filter(beast => beast._id === key);
    this.setState({beastToDisp: selectedBeast[0]});
    this.setState({modalDisp: true});
  }

  selectByHorns = (horns) => {
    let selectByHorn
    if (horns){
      selectByHorn = data.filter(beast => beast.horns === Number(horns));
    } else {
      selectByHorn = data;
    }

    this.setState({beastsByHorns: selectByHorn});
  }

  render(){

    //inside of this return is all JSX
    // javascript that looks like html
    return (
      <Container>
        < Header />
        < SelectedBeast selectByHorns={this.selectByHorns}/>
        < Main data={this.state.beastsByHorns} startModal={this.startModal}/>
        < BeastDisp modalDisp={this.state.modalDisp} beastToDisp={this.state.beastToDisp} stopModal={this.stopModal}/>
        < Footer />
      </Container>
    );
  }


}

//export
export default App;