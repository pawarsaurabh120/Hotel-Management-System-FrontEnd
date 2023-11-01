import { useEffect, useState, } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ShowBooking() {
    const [booking, setBooking] = useState([])
    const [bookingSearch, setBookingSearch] = useState()

    useEffect(()=>{
        axios.get('http://localhost:8083/hotel/booking/getAll')
        .then(response => setBooking(response.data))
    },[])


    function handleDelete(bookingId) {
        const confirm = window.confirm('Would you like to delete?');
        if (confirm) {
            axios.delete('http://localhost:8083/hotel/booking/delete/' + bookingId)
                .then(response => {
                    alert('Booking deleted')
                    window.location.reload();
                })
        }
    }

    return (
        <div className='container mt-5'>
            <h3>Booking</h3>
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
                        <th>No of Days</th>
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
                        <td>{b.bookingCheckIn}</td>
                        <td>{b.bookingCheckOut}</td>
                        <td>{b.bookingDays}</td>
                        <td>{b.room.id}</td>
                        <td>
                        <button className='btn btn-danger' onClick={e => handleDelete(b.bookingId)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        <div>
                <label htmlFor='BookingId' >Booking Id</label>
                <input type='number' className='form-control' name='bookingId' value={bookingSearch}
                    onChange={e => setBookingSearch(e.target.value)}
                />
                <Link to={`/searchBooking/${bookingSearch}`} className='btn btn-info' style={{ float: 'right' }}>Search Booking</Link>
            </div>
    </div>
    )
}

export default ShowBooking