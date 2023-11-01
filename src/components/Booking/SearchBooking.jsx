import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function SearchBooking(){

    const { BookingId } = useParams()
    const [Booking, setBooking] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8083/hotel/booking/' + BookingId)
            .then(response => {setBooking(response.data);
                console.log(response.data);
            })
            .catch(error => console.log(error))
    }, [BookingId])

    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
        <div div className="card" style={{width: '18rem'}} >
            <div className="card-body">
                <p>Booking Id: {Booking.bookigId}</p>
                <p>Email : {Booking.bookingEmail}</p>
                <p>Customer Name : {Booking.bookingName}</p>
                <p>Permanent Address : {Booking.bookingAddress}</p>
                <p>Govt Id  : {Booking.bookingGovtId}</p>
                <p>Govt-Id No : {Booking.bookingGovtIdNo}</p>
                <p>No of Adult: {Booking.bookingAdult}</p>
                <p>No of Children : {Booking.bookingChild}</p>
                <p>No of Days : {Booking.bookingDays}</p>
                <p>CheckIn Date : {Booking.bookingCheckIn}</p>
                <p>CheckOut Date : {Booking.bookingCheckOut}</p>
                <Link to='/showBooking' className='btn btn-secondary'>Back</Link>
            </div>
        </div >
    </div>
    )
}

export default SearchBooking