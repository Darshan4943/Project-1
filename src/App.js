import './App.css'
import { Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import  Navbar  from './Components/Navbar/Navbar';
import Classes  from './Components/Classes/Classes';
import  AboutUs from './Components/Aboutus/AboutUs';
import  Footer  from './Components/Footer/Footer';
import JoinUs from './Components/JoinUs/JoinUs';
import Trainer from './Components/Trainer/Trainer';
import Pricing from './Components/Pricing/Pricing';
function App() {
  return (
    <div >
        
        <Navbar/>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/aboutUs' element={<AboutUs/>}/>
           <Route path='/classes' element={<Classes/>}/>
           <Route path='/trainer' element={<Trainer/>}/>
           <Route path='/joinus' element={<JoinUs/>}/>
           <Route path='/pricing' element={<Pricing/>}/>

        </Routes>
    
        <Footer/>
      
    </div>
  );
}

export default App;