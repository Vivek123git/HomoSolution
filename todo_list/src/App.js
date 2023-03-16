//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Electrician from './components/Service/Electrician/Electrician'
import Plumber from './components/Service/Plumber/Plumber'
import Actech from './components/Service/Actech/Actech'
import Roservice from './components/Service/Roservice/Roservice'
import Cctv from './components/Service/Cctv/Cctv'
import Broadband from './components/Service/Broadband/Broadband'
import CreateLogin from './components/Login/CreateLogin';
import Login from './components/Login/Login';
import ByOwn from './components/Booking/ByOwn'
import OurSite from './components/Booking/OurSite'


function App() {
  return (
    <div className="App">
     {/* <Header/> */}
     <BrowserRouter>
      <Routes>
        <Route exact path="/create-login" element={<CreateLogin/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/" element={<Header/>}/>
        <Route exact path="/electrician" element={<Electrician/>}/>
        <Route exact path="/plumber" element={<Plumber/>}/>
        <Route exact path="/actech" element={<Actech/>}/>
        <Route exact path="/roservice" element={<Roservice/>}/>
        <Route exact path="/cctv" element={<Cctv/>}/>
        <Route exact path="/broadband" element={<Broadband/>}/>
        <Route exact path="/byown" element={<ByOwn/>}/>
        <Route exact path="/oursite" element={<OurSite/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;