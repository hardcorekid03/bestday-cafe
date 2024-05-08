import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../src/components/routes/Routes"

function App() {
  return (
    <>

<Router>
<Navbar/>
  <AppRoutes/>
</Router>


    </>
  )
}

export default App
