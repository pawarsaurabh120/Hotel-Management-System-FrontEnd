import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function UpdateRoom() {
  const { rid } = useParams();
  const [roomId, setRoomId] = useState("")
  const [roomCap, setRoomCap] = useState("")
  const [roomType, setRoomType] = useState("")
  const [roomStatus, setRoomStatus] = useState("")
  const [roomAmount, setRoomAmount] = useState("")

  useEffect(() => {
    if (rid) {
      axios.get("http://localhost:8082/hotel/room/" + rid)
        .then(response => {
          setRoomId(response.data.id)
          setRoomCap(response.data.roomCapacity)
          setRoomType(response.data.roomType)
          setRoomStatus(response.data.roomStatus)
          setRoomAmount(response.data.roomAmount)
        })
        .catch(error => console.log(error))
    }
  }, [rid]);


  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      id: roomId,
      roomCapacity: roomCap,
      roomType: roomType,
      roomStatus: roomStatus,
      roomAmount : roomAmount
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
    <div className='row justify-content-center pt-4' >
      <div className='col-sm-5'>
        <div className='card p-3'>
          <div className='form-row' >
            <h3>Update Room</h3>
            <div>
              <div className='form-group col-md-6'>
                <label htmlFor='roomNo' >Room No: {rid}</label>
              </div>
              <div className='form-group col-md-6'>
                <label htmlFor='roomCapacity'>Room Capacity</label>
                <input type='number' className='form-control' name='roomCapacity' value={roomCap}
                  onChange={(e) => setRoomCap(e.target.value)} />
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
              <div className='form-group col-md-6'>
                <label htmlFor='roomAmount'>Amount</label>
                <input type='number' className='form-control' name='roomAmount' value={roomAmount}
                  onChange={(e) => setRoomAmount(e.target.value)} />
              </div>
              <div><button type='button' className='btn btn-dark' onClick={handleSubmit}>Update</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default UpdateRoom