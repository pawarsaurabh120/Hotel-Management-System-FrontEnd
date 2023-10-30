import { Link } from "react-router-dom"


function OwnerDashboard() {

    return (
        <div className='row justify-content-center pt-4' >
            <div className='col-sm-5'>
                <h3>Owner Dashboard</h3>
                <Link to='/showRoom' className='btn btn-secondary'>Room</Link>
                <Link to='/showStaff' className='btn btn-secondary'>Staff</Link>
                <Link to='/showBooking' className='btn btn-secondary'>Booking</Link>
            </div>
        </div>

    )
}

export default OwnerDashboard