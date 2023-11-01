import React, { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'

function ViewRoom() {

    const [room, setRoom] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8082/hotel/room/avilableRooms')
            .then((response) => { setRoom(response.data) })
    }, [])

    return (
        <div>
            <h4>Receptionist View Room</h4>
            <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Room No</th>
                        <th>Room Capacity</th>
                        <th>Room Type</th>
                        <th>Room Status</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {room.map((r) => (
                        <tr key={r.id}>
                            <td>{r.id}</td>
                            <td>{r.roomCapacity}</td>
                            <td>{r.roomType}</td>
                            <td>{r.roomStatus}</td>
                            <td>{r.roomAmount}</td>
                            <td>
                                <Link to={`/addBooking/${r.id}`} className='btn btn-success my-3'>Book</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default ViewRoom