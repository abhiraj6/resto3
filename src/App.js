import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Loginp from './Components/Loginp';
import Abhi from './Components/Abhi';
import Signi from './Components/Signi';
import HomeMain from './Components/HomeMain';
import Dash from './Components/Dash';
import Scroll from './Components/Scroll';

function App() {
  return (
    <div className="App">
      {/* <HomeMain/> */}
      {/* <Dash/> */}
   <Nav/> 
{/* <Scroll/> */}
   <br/><br/><br/>
   <Routes>
   <Route path='/' element={<Abhi/>}/>
    <Route path='/sign' element={<Signi/>}/>
    <Route path='/log' element={<Loginp/>}/>
    <Route path='/Homep' element={<HomeMain/>}/>
   </Routes>
    </div>
  );
}

export default App;
