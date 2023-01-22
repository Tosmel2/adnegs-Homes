// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import ListOfProperties from './components/ListOfProperties';
import Services from './components/Services';
import AddNewProperty from './components/AddNewProperty';
import Testimony from './components/Testimony';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <ListOfProperties  />
      <Services  />
      <AddNewProperty  />
      <Testimony  />
      <Footer  />
      
      
    </div>
  );
}

export default App;
