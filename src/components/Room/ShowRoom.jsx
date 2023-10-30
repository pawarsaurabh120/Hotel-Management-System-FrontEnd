import { useEffect, useState, } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ShowRoom() {
    const [room, setRoom] = useState([])
    const [roomNoSearch, setRoomNoSearch] = useState()

    // const [editMode, setEditMode] = useState(false)
    // const [newRoomStatus, setNewRoomStatus] = useState("")
    // function handleUpdate(roomNo) {
    //     axios.put(`http://localhost:8082/hotel/room/${roomNo}/${newRoomStatus}`)
    //         .then(response => {
    //             window.location.reload();
    //             alert('Room status updated')
    //             setEditMode(false); // Disable edit mode after updating
    //         })
    //         .catch(error => {
    //             console.error('Error updating room status', error);
    //         });
    // }


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
                    </tr>
                </thead>
                <tbody>
                    {room.map((r) => (
                        <tr key={r.id}>
                            <td>{r.id}</td>
                            <td>{r.roomCapacity}</td>
                            <td>{r.roomType}</td>
                            <td>{r.roomStatus}</td>
                            <td><button className='btn btn-danger' onClick={() => handleDelete(r.id)}>Delete</button></td>
                            {/* <td>
                                {editMode[r.id] ? (
                                    <select defaultValue={room.roomStatus} onChange={(e) => setNewRoomStatus(e.target.value)}>
                                        <option >Choose...</option>
                                        <option value="Available">Available</option>
                                        <option value="Not Available">Not Available</option>
                                    </select>
                                ) : (
                                    r.roomStatus
                                )}
                            </td>
                            <td>
                                {editMode[r.roomNo] ? (
                                    <button className='btn btn-success' onClick={() => handleUpdate(r.roomNo)}>Save</button>
                                ) : (
                                    <>
                                        <button className='btn btn-warning' onClick={() => { setEditMode({ ...editMode, [r.roomNo]: true }) }}>Update</button>
                                        <button className='btn btn-danger' onClick={() => handleDelete(r.roomNo)}>Delete</button>
                                    </>
                                )}
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowRoom;
