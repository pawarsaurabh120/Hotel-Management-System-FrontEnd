
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './components/LogIn/Login';
import ShowRoom from './components/Room/ShowRoom';
import AddRoom from './components/Room/AddRoom';
import UpdateRoom from './components/Room/UpdateRoom';
import SearchRoom from './components/Room/SearchRoom';
import ViewRoom from './components/Room/ViewRoom';
import ShowStaff from './components/Staff/ShowStaff';
import AddStaff from './components/Staff/AddStaff';
import UpdateStaff from './components/Staff/UpdateStaff';
import ShowBooking from './components/Booking/ShowBooking'
import AddBooking from './components/Booking/AddBooking';
import SearchBooking from './components/Booking/SearchBooking';
import Profile from './components/Staff/Profile';



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <Navbar />
              <Routes>  
                   <Route path='/' exact element={<Home />} />  
                   <Route path='/login' exact element={<Login/>}></Route>
                   <Route path='/showRoom' exact element={<ShowRoom />} />
                   <Route path='/addRoom' exact element={<AddRoom />} />
                   {/* <Route path='/updateRoom/:roomNo/:roomStatus' exact element={<ShowRoom />} /> */}
                   <Route path='/updateRoom/:rid' exact element={<UpdateRoom />} />
                   <Route path='/searchRoom/:roomNo' exact element={<SearchRoom />} />
                   <Route path='/viewRoom' exact element={<ViewRoom />} />
                   <Route path='/showStaff' exact element={<ShowStaff />} />
                   <Route path='/addStaff' exact element={<AddStaff />} />
                   <Route path='/updateStaff/:username' exact element={<UpdateStaff/>} />
                   <Route path='/profile' exact element={<Profile />} />
                   <Route path='/showBooking' exact element={<ShowBooking />} />
                   <Route path='/addBooking/:rid' exact element={<AddBooking />} />
                   <Route path='/searchBooking/:BookingId' exact element={<SearchBooking />} />
                   
              </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
