import logo from './logo.svg';
import './App.css';
import Home from './HomeComponents/Home';
import FetchDiscription from './Description1/FetchDiscription';
import Cart2 from './Components/Cart2';
//import NavigationBar from './NavBar/NavigationBar'
import NavigationBar1 from './NavBar/NavigationBar1';
import Customer from './Registration/Customer'
import LoginValidation from './Shelf/login';

function App() {
  return (
    <div className="App">
      {/* <LoginValidation/> */}
       <Home/>
      {/* <FetchDiscription/> */}
      {/* <Customer/> */}
      {/* <NavigationBar1/> */}
     
      {/* <Cart2/> */}
      {/* <Customer/> */}
    </div>
  );
}

export default App;