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
import Login from './components/Login/Login';


function App() {
  return (
    <div className="App">
     {/* <Header/> */}
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/home" element={<Header/>}/>
        <Route exact path="/electrician" element={<Electrician/>}/>
        <Route exact path="/plumber" element={<Plumber/>}/>
        <Route exact path="/actech" element={<Actech/>}/>
        <Route exact path="/roservice" element={<Roservice/>}/>
        <Route exact path="/cctv" element={<Cctv/>}/>
        <Route exact path="/broadband" element={<Broadband/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
