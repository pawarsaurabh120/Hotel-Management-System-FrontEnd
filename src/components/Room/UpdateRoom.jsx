import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import { useParams,  useNavigate} from 'react-router-dom';

function UpdateRoom(){
    const {rid} = useParams();
    
    // const[roomData, setRoomData] = useState({
    //     roomNo:'',
    //     roomCapacity:'',
    //     roomType:'',
    //     roomStatus:''
    // })
    
    const [roomId,setRoomId] = useState("")

    const [roomCap,setRoomCap] = useState("")

    const [roomType,setRoomType] = useState("")

    const [roomStatus,setRoomStatus] = useState("")


    useEffect(() => {
      if (rid) {
          axios.get("http://localhost:8082/hotel/room/"+rid)
              .then(response => {
                setRoomId(response.data.id)
                setRoomCap(response.data.roomCapacity)
                setRoomType(response.data.roomType)
                setRoomStatus(response.data.roomStatus)
              })
              .catch(error => console.log(error))
      }
  }, [rid]);
  

    const navigate = useNavigate();

    const handleSubmit =(event) =>{
        event.preventDefault();

        const payload ={
          id:roomId,
          roomCapacity:roomCap,
          roomType:roomType,
          roomStatus:roomStatus
        }
        
        axios.put("http://localhost:8082/hotel/room/update", payload)
        .then((response) => {
                alert('Room updated successfully')
                console.log(response.data)
                navigate('/showRoom')
        }).catch(error => {
            
            alert("Error while updating the Room")
            console.log(error.data)
        })
    }
    
    return (
        <div className='form-row' >
            <h3>Update Room</h3>
            <div>
             <div className='form-group col-md-6'>
                  <label htmlFor='roomNo' >Room No: {rid}</label>
                  {/* <input type='number' className='form-control' disable name='roomNo' value={roomData.roomNo}
                    onChange={e => setRoomData({...roomData, roomNo: e.target.value})}
                   /> */}
             </div>
             <div className='form-group col-md-6'>
                  <label htmlFor='roomCapacity'>Room Capacity</label>
                  <input type='number' className='form-control' name='roomCapacity' value={roomCap}
                    onChange={(e) => setRoomCap(e.target.value) } 
                    />
             </div>
             <div className='form-group col-md-4'>
                  <label>Room Type</label>
                  <select className='form-control' name='roomType' value={roomType}
                                     onChange={(e) => setRoomType(e.target.value)} >
                          <option>Choose...</option>
                          <option>AC</option>
                          <option>Non-AC</option>
                  </select>
             </div>
             <div className='form-group col-md-4'>
                  <label>Room Status</label>
                  <select className='form-control' name='roomStatus' value={roomStatus}
                                     onChange={e => setRoomStatus(e.target.value)} >
                          <option>Choose...</option>
                          <option>Available</option>
                          <option>Not Available</option>
                  </select>
             </div>
             <div><button type='button' className='btn btn-dark' onClick= {handleSubmit}>Update</button></div>
             </div>
      </div>
    );
}

export default UpdateRoom