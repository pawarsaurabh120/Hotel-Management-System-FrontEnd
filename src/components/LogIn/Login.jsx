import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function Login() {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [role, setRole] = useState('');
     const navigate = useNavigate();

     const handleSubmit = (e) => {
          e.preventDefault();

          console.log(email, password, role);
          
          if(email === 'Owner@gmail.com' && password === 'Owner123' && role ==='Owner'){
            navigate('/ownerNavbar');
          }
          else if(role === 'Manager'){
            navigate('/managerNavbar')
          }
          // else if(role === 'Receptionist'){
          //   navigate('/showBooking')
          // }

     }

     return (
          <div className='row justify-content-center pt-5' >
               <div className='col-sm-6'>
                    <div className='card p-4'>
                         <div className='form-group'>
                              <label for='email'>Email</label>
                              <input type='email' className='form-control' id='email' placeholder='Email'
                                   onChange={e => setEmail(e.target.value)} />
                         </div>
                         <div className='form-group'>
                              <label for='inputPassword4'>Password</label>
                              <input type='password' className='form-control' id='inputPassword4' placeholder='Password'
                                   onChange={e => setPassword(e.target.value)} />
                         </div>
                         <div className='form-group'>
                              <label >Role</label>
                              <select className='form-control' onChange={e => setRole(e.target.value)}>
                                   <option selected>Choose...</option>
                                   <option>Owner</option>
                                   <option>Manager</option>
                                   <option>Receptionist</option>
                              </select>
                         </div>
                         <div>
                              <button type='button' className='btn btn-dark' onClick={handleSubmit}>LogIn</button>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Login;