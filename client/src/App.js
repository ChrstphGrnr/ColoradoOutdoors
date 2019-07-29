import React from 'react';
import './App.css';
import AttractionIndex from './containers/AttractionIndex'
import Container from 'react-bootstrap/Container'
import {Route} from 'react-router-dom'
import AttractionShow from './components/Attractions/AttractionShow'
import About from './components/About'



class App extends React.Component {
  
  render() {
  return (
    <div className="App">
        <div>
        <Container style={{ width: '58rem' }}>
            <Route exact path="/" component={AttractionIndex} />   
            <Route exact path="/attractions/:name" component={AttractionShow} />
            <Route exact path="/about" component={About} />     
            <Route exact path="/attractions" component={AttractionIndex}  />
            <Route exact path="/comments" component={AttractionIndex} />
        </Container>
      </div>
    </div>
  );
}
}

export default App;


