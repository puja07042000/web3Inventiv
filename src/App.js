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
import DecentralizedCrypto from './Components/Pages/Blockchain/DecentralizedCrypto';
import SmartContract from './Components/Pages/Blockchain/SmartContract';
import DAPP from './Components/Pages/Blockchain/DAPP';
import CryptoCurrencyToken from './Components/Pages/Blockchain/CryptoCurrencyToken';
import InitialCoinOffering from './Components/Pages/Blockchain/InitialCoinOffering';

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
        <Route path='/decentralized-crypto-exchange' element={<DecentralizedCrypto />}/>
        <Route path='/smart-contract' element={<SmartContract/>} />
        <Route path='/dapp' element={<DAPP/>}/>
        <Route path='/crypto-currency-token' element={<CryptoCurrencyToken/>}/>
        <Route path='/initial-coin-offering' element={<InitialCoinOffering/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
