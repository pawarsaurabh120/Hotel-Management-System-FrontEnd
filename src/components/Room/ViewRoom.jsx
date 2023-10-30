import React, { useState } from "react"
import { useParams } from "react-router-dom"

function ViewRoom(){

    // const { id } = useParams()
    // const [room, setRoom] = useState({})


    // useEffect(() => {
    //     if(roomStatus === 'Avilable')
    //     axios.get(`http://localhost:8082/hotel/room/${id}`)
    //         .then(response => {setRoom(response.data);
    //             console.log(response.data);
    //         })
    //         .catch(error => console.log(error))
    // }, [id])

    return(
        // <div>
        //     <div div className="card" style={{width: '18rem'}} >
        //         <div className="card-body">
        //             <h5 className="card-title">Room Details</h5>
        //             <p>Room No: {room.id}</p>
        //             <p>Room Capacity: {room.roomCapacity}</p>
        //             <p>Room Type: {room.roomType}</p>
        //             <p>Room Status: {room.roomStatus}</p>
        //             <Link to='/addBooking' className='btn btn-secondary'>BookRoom</Link>
        //         </div>
        //     </div >
        // </div>
        <h3>ViewRoom For Receptionist</h3>

    )

}

export default ViewRoom