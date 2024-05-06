import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar'
import Home from "./components/home/Home";
import CoffeeMenu from "./components/menu/Menu";
import Booking from "./components/booking/Booking";

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <CoffeeMenu/>
    </>
  )
}

export default App
