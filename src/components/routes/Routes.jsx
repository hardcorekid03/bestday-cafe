import { Route, Routes} from "react-router-dom";

import Home from "../home/Home";
import CoffeeMenu from "../menu/Menu";
import Booking from "../booking/Booking";
import Gallery from "../gallery/Gallery";
import Contact from "../contact/Contact";
import Blogs from "../blogs/Blogs";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path ="/" element={<Home/>}/>
            <Route path ="/menu" element={<CoffeeMenu/>}/>3
            <Route path ="/blogs" element={<Blogs/>}/>
            <Route path ="/gallery" element={<Gallery/>}/>
            <Route path ="/contact" element={<Contact/>}/>
            <Route path ="*" element={<h1>Error 404: Page not found!</h1>}/>
        </Routes>
    )
}
export default AppRoutes;