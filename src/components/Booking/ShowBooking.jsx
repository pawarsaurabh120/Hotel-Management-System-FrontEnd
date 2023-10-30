import { useEffect, useState, } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ShowBooking() {
    const [booking, setBooking] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8083/hotel/booking/getAll')
        .then(response => setBooking(response.data))
    },[])


    // function handleDelete(roomNo) {
    //     const confirm = window.confirm('Would you like to delete?');
    //     if (confirm) {
    //         axios.delete('http://localhost:8083/hotel/booking/' + bookingId)
    //             .then(response => {
    //                 alert('Room deleted')
    //                 window.location.reload();
    //             })
    //     }
    // }

    return (
        <div className='container mt-5'>
            <h3>Booking</h3>
            {/* <Link to={'/addRoom'} className='btn btn-success my-3'>Add Room</Link> */}
            <table className='table'>
                <thead>
                    <tr>
                        <th>Booking Id</th>
                        <th>Email Id</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Government Id</th>
                        <th>GovernmentId No</th>
                        <th>No of Adult</th>
                        <th>No of Children</th>
                        <th>CheckIn Date</th>
                        <th>CheckOut Date</th>
                        <th>Room No</th>
                    </tr>
                </thead>
            <tbody>
                {booking.map(b=> (
                    <tr key={b.id}>
                        <td>{b.bookingId}</td>
                        <td>{b.bookingEmail}</td>
                        <td>{b.bookingName}</td>
                        <td>{b.bookingAddress}</td>
                        <td>{b.bookingGovtId}</td>
                        <td>{b.bookingGovtIdNo}</td>
                        <td>{b.bookingAdult}</td>
                        <td>{b.bookingChild}</td>
                        <td>{b.bookingDays}</td>
                        <td>{b.bookingCheckOut}</td>
                        <td>{b.bookingDays}</td>
                        <td>{b.room.id}</td>
                        
                        {/* <td>
                            <button className='btn btn-danger' onClick={e => handleDelete(s.staffEmailId)}>Delete</button>
                        </td> */}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}

export default ShowBooking