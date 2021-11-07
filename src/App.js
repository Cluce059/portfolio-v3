import React, {useState} from 'react';
import About from './components/About';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './pages/Home';
import ContactForm from './pages/Contact';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
 
  return (
    <div>
      <Router>
      <Navbar
      //contactSelected={contactSelected}
      //setContactSelected={setContactSelected}
      ></Navbar>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/contact' exact component={ContactForm}/>
      </Switch>
      </Router>
     
        <Footer></Footer>
        </div>
  );
};

      /*   {<main className="content">
        {!contactSelected ? (
          <>
          <About></About>
          <Portfolio></Portfolio>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
        </main>} */

export default App;
