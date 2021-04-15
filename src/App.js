import React, { Component } from 'react'
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/home.js";
import Footer from "./components/Footer/footer.js"

import GlobalStyle from './styles/Global';



class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
    <div>
     
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        
        
        <GlobalStyle />
        <Home/>
        <Footer/>

   
       
        
      </div>
    
    )
  }
}

export default App

