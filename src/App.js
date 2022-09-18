import './App.css';
import Home from './HomeComponents/Home';
import Newnav from './NavBar/NavigationBar';
import Footer from './NavBar/Footer';
import FetchDiscription from './Descriptionnew/FetchDiscription'
import Shelf from './Shelf/Shelf';
import Cart2 from './Components/Cart2';
import { Link, Outlet } from "react-router-dom";
//import Description from './Description1/Description';


function App() {
  return (
    <div className="App">
      <Newnav/>
      <div style={{ minHeight: "calc(100vh - 34px)"}} className="mt-5">
        {/* <Home/> */}
      <Outlet />
       
       {/* <FetchDiscription/> */}
       {/* <Shelf/> */}
       {/* <Description/> */}
       {/* <Cart2/> */}
       </div>
       <Footer/>
    </div>
  );
}

export default App;