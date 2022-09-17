import './App.css';
import Home from './HomeComponents/Home';
import Newnav from './NavBar/NavigationBar';
import Footer from './NavBar/Footer';


function App() {
  return (
    <div className="App">
      <Newnav/>
      <div style={{ minHeight: "calc(100vh - 34px)"}} className="mt-5">
       <Home/>
       </div>
       <Footer/>
    </div>
  );
}

export default App;