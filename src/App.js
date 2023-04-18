// import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom'
import { Home } from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import { AboutUs } from './Components/Aboutus/AboutUs';
import { Navbar } from './Components/Navbar/Navbar';
import { Classes } from './Components/Classes/Classes';
import { Blogs } from './Components/Blogs/Blogs';

function App() {
  return (
    <div >
        
        <Navbar/>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/Login' element={<Login/>}/>
           <Route path='/Classes' element={<Classes/>}/>
           <Route path='/Blogs' element={<Blogs/>}/>
           <Route path='/AboutUs' element={<AboutUs/>}/>
           {/* <Route path='/' element={<Home/>}/> */}

        </Routes>
    
   
      
    </div>
  );
}

export default App;
