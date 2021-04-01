import logo from './logo.svg';
import './App.css';
import Navbaar from './Components/Header/Navbaar';
import Cards from './Components/Body/Cards';
import Footer from './Components/Footer/Footer';
import Data from './Data/ImageData';
import 'bootstrap/dist/css/bootstrap.min.css';
import Show from './Components/Body/Show';
import { BrowserRouter as Router, Route,Switch, Link } from 'react-router-dom'
import About from './Components/Body/About'
import Home from './Components/Body/Home'
import Services from './Components/Body/Services'
import Error from './Components/Body/Error'





function App() {
  console.log(Data)
  return (
    
    <div className="App">
      <Navbaar></Navbaar>
      
            
          <Switch>
          
            <Route exact path="/"><Home></Home></Route>
                   
                            <Route exact path="/About" ><About></About></Route>
                            <Route exact path="/Services"><Services></Services></Route>
                            <Route><Error></Error></Route>
                            </Switch>
                         
                        <Footer></Footer>     
     
    </div>
  );
}

export default App;
