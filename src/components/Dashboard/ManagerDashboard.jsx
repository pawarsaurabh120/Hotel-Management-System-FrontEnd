import { Link } from "react-router-dom"
function MangerDashboard() {

    return (
        <div className='row justify-content-center pt-4' >
            <div className='col-sm-5'>
                <h3>Manager Dashboard</h3>
                <Link to='/showRoom' className='btn btn-secondary'>Room</Link>
                {/* <Link to='/showBooking' className='btn btn-secondary'>Booking</Link> */}
                <button className='btn btn-secondary'>Booking</button>
            </div>
        </div>
    )

}


export default MangerDashboard