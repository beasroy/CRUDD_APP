import logo from './logo.svg';
import './App.css';
import './components/Adduser';
import Navbar from './components/Navbar';
import CURD from './components/CURD';
import Alluser from './components/Alluser';
import Adduser from './components/Adduser';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element ={<CURD />} />
          <Route path='/all' element ={<Alluser />} />
          <Route path='/add' element ={<Adduser />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
