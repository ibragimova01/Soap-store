import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route} from 'react-router-dom';
import '../src/index.css';
import Header from "./Components/header/Header";
import Details from "./Pages/Details";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Route path='/details/:details_id' component={Details}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
