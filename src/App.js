// import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom'

import Home from './Components/Home/Home'
import { Registration } from './Components/Login/Login';


import { AboutUs } from './Components/Aboutus/AboutUs';
import { Navbar } from './Components/Navbar/Navbar';
import { Classes } from './Components/Classes/Classes';
import { Blogs } from './Components/Blogs/Blogs';
import  Footer  from './Components/Footer/Footer';

function App() {
  return (
    <div >
        
        <Navbar/>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/login' element={<Registration/>}/>
           <Route path='/classes' element={<Classes/>}/>
           <Route path='/blogs' element={<Blogs/>}/>
           <Route path='/aboutUs' element={<AboutUs/>}/>
           {/* <Route path='/' element={<Home/>}/> */}

        </Routes>
    
        <Footer/>
      
    </div>
  );
}

export default App;
