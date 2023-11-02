import './App.css';
import Nav from './components/nav';
import Header from './components/header';
import Specials from './components/Specials';
import Footer from './components/footer';
import Customersay from './components/CustomersSay';
import Location from "./components/Location";

function App() {
  return (
    <>
      <Nav/>
      <Header/>
      <Specials/>
      <Customersay/>
      <Location/>
      <Footer/>
    </>
  );
}

export default App;
