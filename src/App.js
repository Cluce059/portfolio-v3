import React, {useState} from 'react';
import About from './pages/About';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import ContactForm from './pages/Contact';
//import Portfolio from './pages/Portoflio';
//import Cards from './components/Cards';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  //const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      {/* link to close navbar must be in router? */}
      <Router>
      <Navbar
      //contactSelected={contactSelected}
      //setContactSelected={setContactSelected}
      ></Navbar>
      <Switch>
        <Route path='/' exact component={About}/>
        <Route path='/contact' exact component={ContactForm}/>
      </Switch>
      </Router>
      <About />
      <Portfolio />
        <Footer></Footer>
        </div>
  );
}

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
