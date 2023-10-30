import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"


function SearchRoom() {
    const { roomNo } = useParams()
    const [room, setRoom] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8082/hotel/room/${roomNo}`)
            .then(response => {setRoom(response.data);
                console.log(response.data);
            })
            .catch(error => console.log(error))
    }, [roomNo])

    return (
        <div>
            <div div className="card" style={{width: '18rem'}} >
                <div className="card-body">
                    <h5 className="card-title">Room Details</h5>
                    <p>Room No: {room.id}</p>
                    <p>Room Capacity: {room.roomCapacity}</p>
                    <p>Room Type: {room.roomType}</p>
                    <p>Room Status: {room.roomStatus}</p>
                    <Link to='/showRoom' className='btn btn-secondary'>Back</Link>
                    <Link to={`/updateRoom/${room.id}`} className='btn btn-warning'>Update</Link>
                </div>
            </div >
        </div>

    )
}

export default SearchRoom