import { useState } from 'react'
import DashboardLayout from "./pages/layouts/DashboardLayout" ;
import './App.css'
import Login from "./pages/login/Login.jsx";
import Home from "./pages/home/Home.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import HomeLayout from './pages/layouts/HomeLayout';
import Flights from './pages/dashboard/Flights';
import Cars from './pages/dashboard/Cars';
import Stations from './pages/dashboard/Stations'  ; 
import Rooms from './pages/dashboard/Rooms'  ; 
import Providers from './pages/dashboard/Providers'  ; 
import Travels from './pages/dashboard/Travels'  ; 
import Destinations from './pages/dashboard/Destinations'  ;  
import Clients from './pages/dashboard/Clients'; 
import Service from './pages/services/Service';
import About from "./pages/about/About" ; 
import Contact from "./pages/contact/Contact" ; 
export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout/>}>
            <Route index element={<Home />} /> 
            <Route element={<Service />} path="/services"/>
            <Route element={<About /> } path="/about" />
            <Route element={<Contact /> } path="/contact" /> 
          </Route>
          <Route path="/login" element={<Login />}/>
          <Route path='/dashboard' element={<DashboardLayout />}>
            <Route element={<Flights />} index /> 
            <Route element={<Cars />} path="/dashboard/cars"/>
            <Route element={<Stations />} path="/dashboard/stations"/>
            <Route element={<Destinations/>} path="/dashboard/destinations" />
            <Route element={<Rooms />} path="/dashboard/rooms" />
            <Route element={<Travels/>} path="/dashboard/travels" />
            <Route element={<Providers/>} path="/dashboard/providers" />
            <Route element={<Clients /> } path="/dashboard/clients" /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}