import DashboardLayout from "./pages/layouts/DashboardLayout" ;
import './App.css'
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
import DestinationPage from "./pages/destinations/DestinationPage";
import Profile from "./pages/profile/Profile";
import UserInfo from "./pages/profile/UserInfo";
import AccountInfo from "./pages/profile/AccountInfo";
import RecommendationProfile from "./pages/profile/RecommendationProfile";
import Setting from "./pages/dashboard/Setting";
import PasswordInfo from "./pages/profile/PasswordInfo";
import Services from "./pages/services/Services";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import AddTravel from "./pages/addDataPages/AddTravel";
import AddCar from "./pages/addDataPages/AddCar";
import AddRoom from "./pages/addDataPages/AddRoom";
import AddGate from "./pages/addDataPages/AddGate";
import PaymentSetting from "./components/PaymentSetting";
import AddDestination from "./pages/addDataPages/AddDestination";
import ResetPassword from "./pages/forgotPassword/ResetPassword";
import CompanySetting from "./components/CompanySetting";
import TrainTravels from "./pages/trainTravels/TrainTravels";
import OrganizedTravels from "./pages/organizedTravel/OrganizedTravels";
import ProviderPage from "./pages/providers/ProviderPage";
import Card from "./pages/panier/Card";
import CustomAlert from "./components/CustomAlert";
import { ALERT_TYPE } from "./features/pageSlice";
import DashTrainTravel from "./pages/dashboard/DashTrainTravels";
import ProvidersPage from "./pages/providers/ProvidersPage";
import Images from "./pages/dashboard/Images";
import WriteReview from "./pages/writeReview/WriteReview";

export default function App() {
  const user = useSelector(userSelector)
  return (
    <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeLayout/>}>
              <Route element={user?.authority == "COSTUMER" ? <Profile /> : <ErrorPage status={404} /> } path="/profile">
                <Route element={<UserInfo/>} index /> 
                <Route element={<AccountInfo changePasswordPath="/profile/changePassword"/>} path="/profile/accountInfo" /> 
                <Route element={<RecommendationProfile />} path='/profile/recommendationProfile' /> 
                <Route element={<PasswordInfo />} path="/profile/changePassword" />
              </Route> 
              <Route index element={<Home />} /> 
              <Route element={<Services />} path="/services"/>
              <Route element={<About /> } path="/about" />
              <Route element={user?.authority == "COSTUMER" ? <Card /> : <ErrorPage status={401} />} path="/card" />
              <Route element={<Contact /> } path="/contact" /> 
              <Route element={<OffersLayout />} path="/offers">
                <Route element={<FlightsPage />} path={"/offers/flights/:from/:to/:date"} />
                <Route element={<FlightsPage />} path={"/offers/flights"} />
                <Route element={<HotelsPage />} path="/offers/hotels/:search" />
                <Route element={<HotelsPage />} path="/offers/hotels" />
                <Route element={<CarsPage />} path="/offers/cars/:airport/:nbSeats" />
                <Route element={<CarsPage />} path="/offers/cars" />
                <Route element={<OrganizedTravels />} path="/offers/travels/:destination/:date" />
                <Route element={<OrganizedTravels />} path="/offers/travels" />
                <Route element={<DestinationsPage />} path="/offers/destinations"/>
                <Route element={<DestinationPage />} path='/offers/destination/:id'/>
                <Route element={<TrainTravels />} path="/offers/trainTravels/:from/:to/:date" /> 
                <Route element={<TrainTravels />} path="/offers/trainTravels" /> 
              </Route>
              <Route path="/providers" element={<ProvidersPage />} />
              <Route path="/providers/:type" element={<ProvidersPage />} />
              <Route element={<ProviderPage /> } path="/provider/:id" />
              <Route element={<WriteReview />} path="/writeReview/:providerId/:providerType" /> 
            </Route>
            <Route element={<SignUp /> } path="/signUp" />
            <Route path='/dashboard' element={(user?.authority.startsWith("PROVIDER"))||(user?.authority == "ADMIN") ? <DashboardLayout /> : <ErrorPage status={401}/>}>
              <Route element={<Index />} index /> 
              <Route element={user?.authority == "PROVIDER_AIRLINE" ? <Flights /> : <ErrorPage status={401}/>} path="/dashboard/flights" /> 
              <Route element={user?.authority == "PROVIDER_CARSAGENCY" ? <Cars /> : <ErrorPage status={401} /> } path="/dashboard/cars"/>
              <Route element={user?.authority == "ADMIN" ? <Stations /> : <ErrorPage status={401} />} path="/dashboard/stations"/>
              <Route element={user?.authority == "ADMIN" ? <Destinations/> : <ErrorPage status={401}/> } path="/dashboard/destinations" />
              <Route element={user?.authority == "PROVIDER_HOTEL" ? <Rooms /> : <ErrorPage status={401}/> } path="/dashboard/rooms" />
              <Route element={user?.authority == "PROVIDER_TRAVELAGENCY" ? <Travels/> : <ErrorPage status={401}/>} path="/dashboard/travels" />
              <Route element={user?.authority == "ADMIN" ? <Providers/> : <ErrorPage status={401}/>} path="/dashboard/providers" />
              <Route element={user?.authority == "ADMIN" ? <Clients /> : <ErrorPage status={401}/>} path="/dashboard/clients" /> 
              <Route element={user?.authority == "provider_RAILWAYOPERATOR" ? <DashTrainTravel /> : <ErrorPage status={401}/> } path="/dashboard/train-travels" />
              <Route element={user?.authority.startsWith("PROVIDER") ? <Images /> : <ErrorPage status={401}/>} path="/dashboard/images" />
              <Route element={<Setting />} path="/dashboard/settings" >
                <Route index element={<AccountInfo changePasswordPath="/dashboard/settings/changePassword"/> }/> 
                <Route path="/dashboard/settings/company" element={<CompanySetting />}/> 
                <Route path="/dashboard/settings/payment" element={<PaymentSetting />} /> 
                <Route path="/dashboard/settings/changePassword" element={<PasswordInfo />}/> 
              </Route> 
              <Route element={user?.authority == "PROVIDER_AIRLINE" ? <AddTravel type="flight" onSuccessPath="/dashboard/flights"/> : <ErrorPage status={401} /> } path="/dashboard/addFlight" /> 
              <Route element={user?.authority == "PROVIDER_CARAGENCY" ? <AddCar /> : <ErrorPage status={401} />} path="/dashboard/addCar" /> 
              <Route element={user?.authority == "PROVIDER_CARAGENCY" ? <AddCar /> : <ErrorPage status={401} />} path="/dashboard/addCar/:id" /> 
              <Route element={user?.authority == "PROVIDER_HOTEL" ? <AddRoom /> : <ErrorPage status={401} />} path="/dashboard/addRoom" /> 
              <Route element={user?.authority == "ADMIN" ? <AddGate /> : <ErrorPage status={401} />} path="/dashboard/addGate" />
              <Route element={user?.authority == "ADMIN" ? <AddDestination /> : <ErrorPage status={401}/>} path="/dashboard/addDestination" />
              <Route element={user?.authority == "PROVIDER_TRAVELAGENCY" ? <AddTravel type="organized" onSuccessPath="/dashboard/travels"/> : <ErrorPage status={401}/>} path="/dashboard/addTravel" />
              <Route element={user?.authority == "PROVIDER_RAILWAYOPERATOR" ? <AddTravel type="train" onSuccessPath="/dashboard/train-travels"/> : <ErrorPage status={401} />} path="/dashboard/addTrainTravel" /> 
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