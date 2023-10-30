import { useEffect, useState,} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ShowStaff(){
    const [staff, setStaff] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/hotel/staff/')
             .then(response => setStaff(response.data))
    },[])

  function handleDelete(id){
    const confirm = window.confirm('Would you like to delete?');
    if(confirm){
    axios.delete('http://localhost:8081/hotel/staff/'+id)
         .then(response =>{
                         alert('Staff deleted')
                        window.location.reload();

           })
   }
}

    return(
        <div className='container mt-5'>
        <h3>Staff</h3>
        <Link to={'/addStaff'} className='btn btn-success my-3'>Add Staff</Link>
        <Link to={'/searchStaff'} className='btn btn-info'>Search Staff</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Staff Id</th>
                    <th>Staff Username</th>
                    <th>Staff Password</th>
                    <th>Staff Name</th>
                    <th>Staff Address</th>
                    <th>Staff Role</th>
                    <th>Staff Salary</th>
                </tr>
            </thead>
            <tbody>
                {staff.map(s=> (
                    <tr key={s.id}>
                        <td>{s.id}</td>
                        <td>{s.username}</td>
                        <td>{s.password}</td>
                        <td>{s.name}</td>
                        <td>{s.address}</td>
                        <td>{s.role}</td>
                        <td>{s.salary}</td>
                        <td>
                            {/* <Link to={'/updateStaff/${s.staffEmailId}/${r.staffSalary}'} className='btn btn-warning'>Update</Link> */}
                            <button className='btn btn-danger' onClick={e => handleDelete(s.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}

export default ShowStaff