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
import About from "./pages/about/About" ; 
import Contact from "./pages/contact/Contact" ;
import { useSelector } from 'react-redux';
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
import AirlinePage from './pages/providers/AirlinePage';
import HotelPage from './pages/providers/HotelPage';
import TravelAgencyPage from './pages/providers/TravelAgencyPage';
import CarAgencyPage from './pages/providers/CarAgencyPage';
import RailWayOperatorPage from './pages/providers/RailWayOperatorPage';
import DestinationPage from "./pages/destinations/DestinationPage";
import Profile from "./pages/profile/Profile";
import UserInfo from "./pages/profile/UserInfo";
import AccountInfo from "./pages/profile/AccountInfo";
import RecommendationProfile from "./pages/profile/RecommendationProfile";
import Setting from "./pages/dashboard/Setting";
import PasswordInfo from "./pages/profile/PasswordInfo";
import Services from "./pages/services/Services";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import AddFlight from "./pages/addDataPages/AddFlight";
import AddCar from "./pages/addDataPages/AddCar";
import AddRoom from "./pages/addDataPages/AddRoom";
import ProvidersLayout from "./pages/providers/ProvidersLayout";
import AddGate from "./pages/addDataPages/AddGate";
import PaymentSetting from "./components/PaymentSetting";
import AddDestination from "./pages/addDataPages/AddDestination";
import ResetPassword from "./pages/forgotPassword/ResetPassword";

export default function App() {
  const user = useSelector(userSelector)
  return (
    <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeLayout/>}>
              <Route element={user?.accountType == "COSTUMER" ? <Profile /> : <ErrorPage status={404} /> } path="/profile">
                <Route element={<UserInfo/>} index /> 
                <Route element={<AccountInfo changePasswordPath="/profile/changePassword"/>} path="/profile/accountInfo" /> 
                <Route element={<RecommendationProfile />} path='/profile/recommendationProfile' /> 
                <Route element={<PasswordInfo />} path="/profile/changePassword" />
              </Route> 
              <Route index element={<Home />} /> 
              <Route element={<Services />} path="/services"/>
              <Route element={<About /> } path="/about" />
              <Route element={<Contact /> } path="/contact" /> 
              <Route element={<OffersLayout />} path="/offers">
                <Route element={<FlightsPage />} path="/offers/flights" />
                <Route element={<HotelsPage />} path="/offers/hotels:search" />
                <Route element={<CarsPage />} path="/offers/cars" />
                <Route element={<HotelsPage />} path="/offers/organized-travel" />
                <Route element={<HotelsPage />} path="/offers/hotels" />
                <Route element={<DestinationsPage />} path="/offers/destinations"/>
                <Route element={<DestinationPage />} path='/offers/destination/:id'/>
              </Route>
              <Route path='/providers'>
                <Route element={<AirlinePage />} path='/providers/airline/:id' />
                <Route element={<HotelPage />}  path='/providers/hotel/:id'/> 
                <Route element={<TravelAgencyPage />}  path='/providers/travelAgency/:id'/> 
                <Route element={<CarAgencyPage />}  path='/providers/carAgency/:id'/> 
                <Route element={<RailWayOperatorPage />} path="/providers/railwayOperator" /> 
              </Route>
              <Route element={<SignUp /> } path="/signUp" />
            </Route>
            <Route path="/login" element={<Login />}/>
            <Route path='/dashboard' element={(user?.accountType == "PROVIDER")||(user?.accountType == "ADMIN") ? <DashboardLayout /> : <ErrorPage status={401}/>}>
              <Route element={<Index />} index /> 
              <Route element={user?.providerType == "AIRLINE" ? <Flights /> : <ErrorPage status={401}/>} path="/dashboard/flights" /> 
              <Route element={user?.providerType == "CAR_AGENCY" ? <Cars /> : <ErrorPage status={401} /> } path="/dashboard/cars"/>
              <Route element={user?.accountType == "ADMIN" ? <Stations /> : <ErrorPage status={401} />} path="/dashboard/stations"/>
              <Route element={user?.accountType == "ADMIN" ? <Destinations/> : <ErrorPage status={401}/> } path="/dashboard/destinations" />
              <Route element={user?.providerType == "HOTEL" ? <Rooms /> : <ErrorPage status={401}/> } path="/dashboard/rooms" />
              <Route element={user?.providerType == "TRAVEL_AGENCY" ? <Travels/> : <ErrorPage status={401}/>} path="/dashboard/travels" />
              <Route element={user?.accountType == "ADMIN" ? <Providers/> : <ErrorPage status={401}/>} path="/dashboard/providers" />
              <Route element={user?.accountType == "ADMIN" ? <Clients /> : <ErrorPage status={401}/>} path="/dashboard/clients" /> 
              <Route element={<Setting />} path="/dashboard/settings" >
                <Route index element={<AccountInfo changePasswordPath="/dashboard/settings/changePassword"/> }/> 
                <Route path="/dashboard/settings/company" element={<RecommendationProfile />}/> 
                <Route path="/dashboard/settings/payment" element={<PaymentSetting />} /> 
                <Route path="/dashboard/settings/changePassword" element={<PasswordInfo />}/> 
              </Route> 
              <Route element={user?.providerType == "AIRLINE" ? <AddFlight /> : <ErrorPage status={401} /> } path="/dashboard/addFlight" /> 
              <Route element={user?.providerType == "CAR_AGENCY" ? <AddCar /> : <ErrorPage status={401} />} path="/dashboard/addCar" /> 
              <Route element={user?.providerType == "HOTEL" ? <AddRoom /> : <ErrorPage status={401} />} path="/dashboard/addRoom" /> 
              <Route element={user?.accountType == "ADMIN" ? <AddGate /> : <ErrorPage status={401} />} path="/dashboard/addGate" />
              <Route element={user?.accountType == "ADMIN" ? <AddDestination /> : <ErrorPage status={401}/>} path="/dashboard/addDestination" />
            </Route>
            <Route path="/*" element={<ErrorPage status={404} message="page not found"/>} /> 
            <Route path="/payment" element={<PayementPage /> } />
            <Route path="/forgotPassword" element={<ForgotPassword />} /> 
            <Route path="/resetPassword/:id" element={<ResetPassword />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
} 