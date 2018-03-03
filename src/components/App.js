import React, { Component } from 'react';

import '../style.css';

import Header from './Header';
import StoreListView from '../containers/StoreListView';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <StoreListView />
        <Footer />
      </div>
    );
  }
}

export default App;
