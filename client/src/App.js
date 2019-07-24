import React from 'react';
import logo from './logo.svg';
import './App.css';
import AttractionIndex from './Components/Attractions/AttractionIndex'


class App extends React.Component {
  
  state = {
    attractions: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/attractions')
    .then(resp => resp.json())
    .then(json => this.setState({
      attractions: json
    }))
    // debugger
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
           <AttractionIndex attractions={this.state.attractions} />
        </div>
        
      </header>
    </div>
  );
}
}

export default App;
