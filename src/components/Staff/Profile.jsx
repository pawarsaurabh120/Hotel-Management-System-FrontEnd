import axios from "axios"
import { useEffect, useState } from "react"

function Profile() {
    const [staff, setStaff] = useState({});
    const [username, setUsername]=useState("");

    useEffect(() => {
         setUsername(JSON.parse(localStorage.getItem("UserData")).username);
        axios.get(`http://localhost:8081/hotel/staff/${username}`)
            .then(response => {
                setStaff(response.data);
                console.log(response.data);
            })
            .catch(error => console.log(error))
    }, [username]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
            <div div className="card"  style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">Profile</h5>
                    <p>Id: {staff.id}</p>
                    <p>UserName: {staff.username}</p>
                    <p>Password:{staff.password} </p>
                    <p>Name: {staff.name}</p>
                    <p>Address: {staff.address}</p>
                    <p>Role: {staff.role}</p>
                    <p>Salary:{staff.salary} </p>
                </div>
            </div >
        </div>
    )
}

export default Profile