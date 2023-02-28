import React from 'react';
import Header from './Header';
import Main from './Main';
import HornedBeast from './HornedBeast';
import Footer from './Footer';
import './App.css';
class App extends React.Component {
  
  render(){
    
    return(
      <>
      <header>
         <h1>People of 301</h1>
         </header>
         <main>
         </main>
         <footer>&copy; Code fellows 007</footer>
         </>
    );
  }
}

export default App; 


// ======================================================
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
