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
import React from 'react';
import * as typeformEmbed from'@typeform/embed'

class App extends React.Component {
  componentDidMount(){
    const popupt = typeformEmbed.makePopup(
      'https://maubelajarapa.typeform.com/to/Va8BSG5G#hidden=121212', // NOTE: Replace with your typeform URL
      {
        onSubmit: function (event) {
          console.log(event.response_id);
          console.log("a")
        }
      }
    )
    document.getElementById('bt-popup').addEventListener('click',function
    (){
        popupt.open();
    })
  }
  render() {
    return (
          <div>
            <button id="bt-popup" class="my-button">Popup</button>
          </div>
    )
  }
}

export default App;
