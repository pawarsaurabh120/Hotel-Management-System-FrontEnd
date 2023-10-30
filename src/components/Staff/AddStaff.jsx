import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddStaff() {

  const [staffData, setStaffData] = useState({
    staffEmailId: '',
    staffName: '',
    staffAddress: '',
    staffRole: '',
    staffSalary: ''
  })

  const navigate = useNavigate();

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      staffData.staffEmailId.trim() === '' || staffData.staffName.trim() === '' ||
      staffData.staffAddress.trim() === '' || staffData.staffRole.trim() === '' ||
      staffData.staffSalary === '') {
      alert('Please fill out all fields before submitting');
      return;
    }
    if (!isEmailValid(staffData.staffEmailId)) {
      alert('Please enter a valid email address');
      return;
    }
    if (parseInt(staffData.staffSalary) <= 0) {
      alert('Staff Salary must be greater than zero');
      return;
    }
    axios.post('http://localhost:8081/hotel/staff', staffData).then(response => {
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
              <label htmlFor='staffEmailId' >Staff Email Id</label>
              <input type='email' className='form-control' name='staffEmailId'
                onChange={e => setStaffData({ ...staffData, staffEmailId: e.target.value })}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='staffName'>Staff Name</label>
              <input type='text' className='form-control' name='staffName'
                onChange={e => setStaffData({ ...staffData, staffName: e.target.value })}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='staffAddress'>Staff Address</label>
              <input type='text' className='form-control' name='staffAddress'
                onChange={e => setStaffData({ ...staffData, staffAddress: e.target.value })}
              />
            </div>
            <div className='form-group'>
              <label>Staff Role</label>
              <select className='form-control' name='staffRole'
                onChange={e => setStaffData({ ...staffData, staffRole: e.target.value })} >
                <option>Choose...</option>
                <option>Manager</option>
                <option>Receptionist</option>
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='staffSalary'>Staff Salary</label>
              <input type='number' className='form-control' name='staffSalary'
                onChange={e => setStaffData({ ...staffData, staffSalary: e.target.value })}
              />
            </div>
            <div><button type='button' className='btn btn-dark' onClick={handleSubmit}>Submit</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddStaff