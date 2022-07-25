import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import horneddata from './data/horneddata.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      horneddata:horneddata,
      displayHorned:false
    }
  }

  handleClose =()=>{
    this.setState({
      displayHorned:false
    })
  }

  render() {
  
    return (
      <div>
            <Header/>
          <Main
          horneddata={this.state.horneddata}
          displayCardAsModel={this.displayCardAsModel}
          />

          <Footer/>
      </div>
    )
   
  }
}

export default App;
