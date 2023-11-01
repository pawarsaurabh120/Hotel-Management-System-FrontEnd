import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function AddRoom() {

  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("")
  const [roomCap, setRoomCap] = useState("")
  const [roomType, setRoomType] = useState("")
  const [roomStatus, setRoomStatus] = useState("")
  const [roomAmount, setRoomAmount] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      id: roomId,
      roomCapacity: roomCap,
      roomType: roomType,
      roomStatus: roomStatus,
      roomAmount : roomAmount
    }

    axios.post('http://localhost:8082/hotel/room/add', payload)
      .then(response => {
        alert('Room added successfully')
        navigate('/showRoom')
      })
  }

  return (
    <div className='row justify-content-center pt-4' >
      <div className='col-sm-5'>
        <h3>Add Room</h3>
        <div className='card p-3'>
          <div>
            <div className='form-group'>
              <label htmlFor='roomNo' >Room No</label>
              <input type='number' className='form-control' name='roomNo'
                onChange={e => setRoomId(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='roomCapacity'>Room Capacity</label>
              <input type='number' className='form-control' name='roomCapacity'
                onChange={e => setRoomCap(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label>Room Type</label>
              <select className='form-control' name='roomType'
                onChange={e => setRoomType(e.target.value)} >
                <option>Choose...</option>
                <option>AC</option>
                <option>Non-AC</option>
              </select>
            </div>
            <div className='form-group'>
              <label>Room Status</label>
              <select className='form-control' name='roomStatus'
                onChange={e => setRoomStatus(e.target.value)} >
                <option>Choose...</option>
                <option>Available</option>
                <option>Not Available</option>
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='roomAmount'>Amount</label>
              <input type="number" className='form-control' name='roomAmount'
                onChange={e => setRoomAmount(e.target.value)}
              />
            </div>
            <div><button type='button' className='btn btn-dark' onClick={handleSubmit}>Submit</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddRoom;