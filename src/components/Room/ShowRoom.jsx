import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ShowRoom() {

    const [room, setRoom] = useState([])
    const [roomNoSearch, setRoomNoSearch] = useState()

    useEffect(() => {
        axios.get('http://localhost:8082/hotel/room/getAll')
            .then((response) => { setRoom(response.data) })
    }, [])

    function handleDelete(id) {
        const confirm = window.confirm('Would you like to delete?');
        if (confirm) {
            axios.delete('http://localhost:8082/hotel/room/delete/' + id)
                .then(response => {
                    alert('Room deleted')
                    window.location.reload();
                })
        }
    }

    return (
        <div className='container mt-5'>
            <h3>Room</h3>

            <Link to={'/addRoom'} className='btn btn-success my-3'>Add Room</Link>
            <div>
                <label htmlFor='roomNo' >Room No</label>
                <input type='number' className='form-control' name='roomNo' value={roomNoSearch}
                    onChange={e => setRoomNoSearch(e.target.value)}
                />
                <Link to={`/searchRoom/${roomNoSearch}`} className='btn btn-info' style={{ float: 'right' }}>Search Room</Link>
            </div>
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
                                <td><button className='btn btn-danger' onClick={() => handleDelete(r.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    )
}

export default ShowRoom;
