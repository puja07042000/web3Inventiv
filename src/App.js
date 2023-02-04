import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Services from './Components/Pages/Services/Services';
import About from './Components/Pages/About Us/About'
import Defi from './Components/Pages/Blockchain/Defi';
import Staking from './Components/Pages/Blockchain/Staking';
import LendingandBorrowing from './Components/Pages/Blockchain/LendingandBorrowing';
import DAO from './Components/Pages/Blockchain/DAO';
import IDO from './Components/Pages/Blockchain/IDO';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/defi-blockchain' element={<Defi />} />
        <Route path='/staking' element={<Staking />} />
        <Route path='/lending-and-borrowing' element={<LendingandBorrowing />} />
        <Route path='/dao' element={<DAO />} />
        <Route path='/ido' element={<IDO/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
