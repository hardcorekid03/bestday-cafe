import { Route, Routes} from "react-router-dom";

import Home from "../home/Home";
import CoffeeMenu from "../menu/Menu";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path ="/" element={<Home/>}/>
            <Route path ="/menu" element={<CoffeeMenu/>}/>
            <Route path ="*" element={<h1>Error 404: Page not found!</h1>}/>
        </Routes>
    )
}
export default AppRoutes;