import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddStaff() {

  const navigate = useNavigate();
  const [staffId, setStaffId] = useState("")
  const [staffUsername, setStaffUsername] = useState("")
  const [staffPassword, setStaffPassword] = useState("")
  const [staffName, setStaffName] = useState("")
  const [staffAddress, setStaffAddress] = useState("")
  const [staffRole, setStaffRole] = useState("")
  const [staffSalary, setStaffSalary] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      id: staffId,
      username: staffUsername,
      password: staffPassword,
      name: staffName,
      address: staffAddress,
      role: staffRole,
      salary: staffSalary,
  };

    axios.post('http://localhost:8081/hotel/staff/add', payload)
      .then(response => {
        alert('Staff added successfully')
        navigate('/showStaff')
      })
  }
  

  return (
    <div className='row justify-content-center pt-4' >
      <div className='col-sm-5'>
        <h3>Add Staff</h3>
        <div className='card p-3'>
          <div>
          <div className='form-group'>
              <label htmlFor='staffId' >staff Id</label>
              <input type='number' className='form-control' name='staffId'
                onChange={e => setStaffId(e.target.value)}  />
            </div>
            <div className='form-group'>
              <label htmlFor='staffUsername' >Username</label>
              <input type='email' className='form-control' name='staffUsername'
                onChange={e => setStaffUsername(e.target.value)}  />
            </div>
            <div className='form-group'>
              <label htmlFor='staffPassword' >Password</label>
              <input type='text' className='form-control' name='staffPassword'
                onChange={e => setStaffPassword(e.target.value)}  />
            </div>
            <div className='form-group'>
              <label htmlFor='staffName'>Staff Name</label>
              <input type='text' className='form-control' name='staffName'
               onChange={e => setStaffName(e.target.value)}  />
            </div>
            <div className='form-group'>
              <label htmlFor='staffAddress'>Staff Address</label>
              <input type='text' className='form-control' name='staffAddress'
                onChange={e => setStaffAddress(e.target.value)} />
            </div>
            <div className='form-group'>
              <label>Staff Role</label>
              <select className='form-control' name='staffRole'
                onChange={e => setStaffRole(e.target.value)} >
                <option>Choose...</option>
                <option value="MANAGER">Manager</option>
                <option value="RECEPTIONIST">Receptionist</option>
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='staffSalary'>Staff Salary</label>
              <input type='number' className='form-control' name='staffSalary'
               onChange={e => setStaffSalary(e.target.value)}  />
            </div>
            <div><button type='button' className='btn btn-dark' onClick={handleSubmit}>Submit</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddStaff