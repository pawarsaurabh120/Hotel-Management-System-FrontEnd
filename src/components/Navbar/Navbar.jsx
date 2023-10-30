import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState("false");

  const navbarStyle = {
    height: "50px",
    paddingTop: "10px",
    backgroundColor: "black",
  };

  const linkStyle = {
    margin: "0 10px",
    color: "goldenrod",
    textDecoration: "none",
  };

  useEffect(() => {
    let staff = JSON.parse(localStorage.getItem("UserData"));
    if(staff!=null){
      setRole(staff.role);
    }
    setIsLoggedIn(localStorage.getItem("isLoggedIn"));
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-sm" style={navbarStyle}>
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="navbarMenu" style={linkStyle} to="/">
              Home
            </Link>
          </li>
          {isLoggedIn === "true" ? (
            <>
              <li className="nav-item">
                <Link
                  className="navbarMenu"
                  onClick={logout}
                  style={linkStyle}
                  to="/ownerlogin"
                >
                  LogOut
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navbarMenu" style={linkStyle} to="/profile">
                  Profile
                </Link>
              </li>
              //Owner
              {role === 'OWNER' ? (
                <><li className="nav-item">
                  <Link className="navbarMenu" style={linkStyle} to="/showStaff">
                    Staff
                  </Link>
                </li><li className="nav-item">
                    <Link className="navbarMenu" style={linkStyle} to="/showRoom">
                      Room
                    </Link>
                  </li><li className="nav-item">
                    <Link
                      className="navbarMenu"
                      style={linkStyle}
                      to="/showBooking"
                    >
                      Booking
                    </Link>
                  </li></>
              ) : undefined}
              //Manager
              {role === 'MANAGER' ? (
                <>
                  <li className="nav-item">
                    <Link className="navbarMenu" style={linkStyle} to="/viewStaff">
                      Staff
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="navbarMenu" style={linkStyle} to="/showRoom">
                      Room
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="navbarMenu"
                      style={linkStyle}
                      to="/showBooking"
                    >
                      Booking
                    </Link>
                  </li>
                </>
              ) : undefined}
              //Receptionist
              {role === 'RECEPTIONIST' ? (
                <>
                  <li className="nav-item">
                    <Link className="navbarMenu" style={linkStyle} to="/viewRoom">
                      Room
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="navbarMenu"
                      style={linkStyle}
                      to="/showBooking"
                    >
                      Booking
                    </Link>
                  </li>
                </>
              ) : undefined}
            </>
          ) :
            <li className="nav-item">
              <Link className="navbarMenu" style={linkStyle} to="/ownerlogin">
                LogIn
              </Link>
            </li>
          }
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
