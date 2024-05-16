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
import { Provider, useSelector } from 'react-redux';
import FlightsPage from './pages/flights/FlightsPage';
import HotelsPage from './pages/hotels/HotelsPage';
import CarsPage from './pages/cars/CarsPage'
import DestinationsPage from "./pages/destinations/DestinationsPage" 
import { userSelector } from './store/selectors/userSelector';
import SignUp from './pages/signUp/SignUp';
import OffersLayout from './pages/layouts/OffersLayout';
import ErrorPage from './pages/errorsPages/ErrorPage';
import PayementPage from './pages/payementPage/PayementPage';
import Index from './pages/dashboard/Index';

export default function App() {
  const user = useSelector(userSelector)
  return (
    <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeLayout/>}>
              <Route index element={<Home />} /> 
              <Route element={<Service />} path="/services"/>
              <Route element={<About /> } path="/about" />
              <Route element={<Contact /> } path="/contact" /> 
              <Route element={<OffersLayout />} path="/offers">
                <Route element={<FlightsPage />} path="/offers/flights" />
                <Route element={<HotelsPage />} path="/offers/hotels" />
                <Route element={<CarsPage />} path="/offers/cars" />
                <Route element={<HotelsPage />} path="/offers/organized-travel" />
                <Route element={<HotelsPage />} path="/offers/hotels" />
                <Route element={<DestinationsPage />} path="/offers/destinations" /> 
              </Route>
              <Route element={<SignUp /> } path="/signUp" />
            </Route>
            <Route path="/login" element={<Login />}/>
            <Route path='/dashboard' element={(user?.accountType == "PROVIDER")||(user?.accountType == "ADMIN") ? <DashboardLayout /> : <ErrorPage />}>
              <Route element={<Index />} index /> 
              <Route element={user?.providerType == "AIRLINE" ? <Flights /> : <ErrorPage status={401}/>} path="/dashboard/flights" /> 
              <Route element={user?.providerType == "CAR_AGENCY" ? <Cars /> : <ErrorPage status={401} /> } path="/dashboard/cars"/>
              <Route element={user?.accountType == "ADMIN" ? <Stations /> : <ErrorPage status={401} />} path="/dashboard/stations"/>
              <Route element={user?.accountType == "ADMIN" ? <Destinations/> : <ErrorPage /> } path="/dashboard/destinations" />
              <Route element={user?.providerType == "HOTEL" ? <Rooms /> : <ErrorPage /> } path="/dashboard/rooms" />
              <Route element={user?.providerType == "TRAVEL_AGENCY" ? <Travels/> : <ErrorPage />} path="/dashboard/travels" />
              <Route element={user?.accountType == "ADMIN" ? <Providers/> : <ErrorPage />} path="/dashboard/providers" />
              <Route element={user?.accountType == "ADMIN" ? <Clients /> : <ErrorPage />} path="/dashboard/clients" /> 
            </Route>
            <Route path="/*" element={<ErrorPage status={404} message="page not found"/>} /> 
            <Route path="/payment" element={<PayementPage /> } />
          </Routes>
        </BrowserRouter>
    </div>
  )
} 