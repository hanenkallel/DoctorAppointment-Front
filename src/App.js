import React, { Component } from 'react'
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/home.js";
import Footer from "./components/Footer/footer.js";
import about from "./components/about/about.js"
import 'bootstrap/dist/css/bootstrap.min.css' ;

import GlobalStyle from './styles/Global';
 import {BrowserRouter , Route} from 'react-router-dom' ;
 import Appointment from './components/containers/Appointment/index' ; 
import AppointmentDetails from './components/containers/AppointmentDetails/index';
import { Provider } from 'react-redux';
import store from './store.js';
import {
  HashRouter as Router,
  Switch,
 
} from 'react-router-dom';






class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <BrowserRouter>
    <div>
    
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        
        
        <GlobalStyle />

        <Router>
      <Provider store={store}>
        <Switch>
        <Route exact path="/" component= {Home} />
          <Route path="/about" component= {about} />
     
       
          <Route path="/:date/:month/:year/:timeFrom/details" component={AppointmentDetails}/>
          <Route path="/:date?/:month?/:year?/" component={Appointment}/>
         
        </Switch>
      </Provider>
    </Router>
    

        
        <Footer/>

       

   
       
        
      </div>
      </BrowserRouter>
    
    )
  }
}

export default App

