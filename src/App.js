import './App.css'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Cover from './components/Cover'
import Dropdown from './components/Dropdown'
import Post from './components/Post'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return (
      <div>
        <Header />
          <Cover />
        <Footer />
      </div>
    );
  }
}

export default App;
