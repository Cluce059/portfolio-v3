import About from './components/About';
import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <About></About>
      </main>
        <Footer></Footer>
    </div>
  );
}

export default App;
