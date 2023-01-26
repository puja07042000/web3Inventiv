import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Services from './Components/Pages/Services/Services';
import About from './Components/Pages/About Us/About'
import Defi from './Components/Pages/Blockchain/Defi';
import Staking from './Components/Pages/Blockchain/Staking';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/defi-blockchain' element={<Defi />} />
        <Route path='/staking' element={<Staking />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
