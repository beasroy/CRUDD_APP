import logo from './logo.svg';
import './App.css';
import './components/Adduser';
import Navbar from './components/Navbar';
import CURD from './components/CURD';
import Alluser from './components/Alluser';
import Adduser from './components/Adduser';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Edituser from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element ={<CURD />} />
          <Route path='/all' element ={<Alluser />} />
          <Route path='/add' element ={<Adduser />} />
          <Route path='/edit/:id' element={<Edituser />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
