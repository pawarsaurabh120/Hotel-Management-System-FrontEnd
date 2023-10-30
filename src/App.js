
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Adminlogin from './components/LogIn/OwnerLogin';
import ShowRoom from './components/Room/ShowRoom';
import AddRoom from './components/Room/AddRoom';
import UpdateRoom from './components/Room/UpdateRoom';
import SearchRoom from './components/Room/SearchRoom';
import ViewRoom from './components/Room/ViewRoom';
import ViewStaff from './components/Staff/ViewStaff';
import ShowStaff from './components/Staff/ShowStaff';
import AddStaff from './components/Staff/AddStaff';
import SearchStaff from './components/Staff/SearchStaff';
import UpdateStaff from './components/Staff/UpdateStaff';
import ManagerDashboard from './components/Dashboard/ManagerDashboard'
import OwnerDashboard from './components/Dashboard/OwnerDashboard'
import ShowBooking from './components/Booking/ShowBooking'
import Profile from './components/Staff/Profile';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <Navbar />
              <Routes>  
                   <Route path='/' exact element={<Home />} />  
                   <Route path='/ownerlogin' exact element={<Adminlogin/>}></Route>
                   <Route path='/showRoom' exact element={<ShowRoom />} />
                   <Route path='/addRoom' exact element={<AddRoom />} />
                   {/* <Route path='/updateRoom/:roomNo/:roomStatus' exact element={<ShowRoom />} /> */}
                   <Route path='/updateRoom/:rid' exact element={<UpdateRoom />} />
                   <Route path='/searchRoom/:roomNo' exact element={<SearchRoom />} />
                   <Route path='/viewRoom' exact element={<ViewRoom />} />
                   <Route path='/viewStaff' exact element={<ViewStaff />} />
                   <Route path='/showStaff' exact element={<ShowStaff />} />
                   <Route path='/addStaff' exact element={<AddStaff />} />
                   <Route path='/searchStaff' exact element={<SearchStaff/>}/>
                   <Route path='/updateStaff' exact element={<UpdateStaff/>} />
                   <Route path='/managerNavbar' exact element={<ManagerDashboard/>} />
                   <Route path='/ownerNavbar' exact element={<OwnerDashboard/>} />
                   <Route path='/showBooking' exact element={<ShowBooking />} />
                   <Route path='/profile' exact element={<Profile />} />
              </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
