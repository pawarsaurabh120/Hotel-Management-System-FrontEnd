import { useEffect, useState, Link } from 'react'
import axios from 'axios'

function ShowRoom() {
    const [room, setRoom] = useState([])
    // const submit = () => {
    //     axios.get("http://localhost:8082/hotel/room")
    //         .then(res => setRoom(res.data))
    //         .catch(err => console.log(err))
    // }
    
    useEffect(() => {
        axios.get("http://localhost:8082/hotel/room")
            .then(res => setRoom(res.data))
            .catch(err => console.log(err))
    },[])
    return (
        // <button onClick={submit}>Click</button> 
        <div className='container mt-5'>
            <h3>Room</h3>
            <Link to="/addRoom" className='btn btn-success my-3'>Add Room</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Room No</th>
                        <th>Room Capacity</th>
                        <th>Room Type</th>
                        <th>Room Status</th>
                    </tr>
                </thead>
                <tbody>
                    {room.map(r=> (
                        <tr key={r.id}>
                            <td>{r.roomNo}</td>
                            <td>{r.roomCapacity}</td>
                            <td>{r.roomType}</td>
                            <td>{r.roomStatus}</td>
                            <td>
                                <button className='btn btn-warning'>Update</button>
                                <button className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowRoom;