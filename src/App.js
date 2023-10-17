
import './App.css';
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Login from './components/LogIn/Login';
import ShowRoom from './components/Room/ShowRoom';
import AddRoom from './components/Room/AddRoom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
              <Routes>  
                   <Route path="/" exact element={<Home />} />  
                   <Route path="/login" exact element={<Login />} />
                   <Route path="/showRoom" exact element={<ShowRoom />} />
                   <Route path="/addRoom" exact element={<AddRoom />} />
              </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
