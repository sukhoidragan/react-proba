import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import './App.css';

const imeFirme  = "Mikroelektonika d.o.o.";
const slogan = "Pravimo racunarsku mikrokontrolere";

class App extends Component {
  render() {
    return (
      <div className="App">
      {/*mozemo dodavati koja god svojstva hocemo*/}
       <Header ime={imeFirme} slogan={slogan} />
       <Main/>        
        <Footer ime={imeFirme} osnovano={2019}/>
      </div>
    );
  }
}

export default App;
