import {useNavigate} from "react-router-dom";
import React, {useState} from "react";

function Login (){
   const[email, setEmail] = useState("");
   const[password, setPassword] = useState("");
   const[role, setRole] = useState("");
   const navigate = useNavigate();
   const handleClose = () => {
         navigate("/login");
   }

   const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(email, password, role);
    // if(email === "Owner@gmail.com" && password === "Owner@123"){
    //   navigate("/Owner");
    // }
    // else if(role === Manger){
    //   navigate("/Manager")
    // }
    // else if(role === Receptionist){
    //   navigate("/Receptionist")
    // }
    
   }

    return (
      <div class="form-row">
           <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
           </div>
           <div class="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
           </div>
           <div class="form-group col-md-4">
                <label for="inputState">Role</label>
                <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>Owner</option>
                        <option>Manager</option>
                        <option>Staff</option>
                </select>
    </div>
    </div>
      );
}

export default Login;