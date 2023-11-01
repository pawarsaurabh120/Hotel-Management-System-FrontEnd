import { useEffect, useState } from "react";
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function AddBooking() {

    const [bookingId, setBookingId] = useState("");
    const [bookingEmail, setBookingEmail] = useState("");
    const [bookingName, setBookingName] = useState("");
    const [bookingAddress, setBookingAddress] = useState("");
    const [bookingGovtId, setBookingGovtId] = useState("");
    const [bookingGovtIdNo, setBookingGovtIdNo] = useState("");
    const [bookingAdult, setBookingAdult] = useState("");
    const [bookingChild, setBookingChild] = useState("");
    const [bookingDays, setBookingDays] = useState("");
    const [bookingCheckIn, setBookingCheckIn] = useState(null);
    const [bookingCheckOut, setBookingCheckOut] = useState(null);
    const { rid } = useParams();
    const [room, setRoom] = useState({});

    const navigate = useNavigate();

    useEffect(()=>{
          axios.get("http://localhost:8082/hotel/room/getByRoomNo/"+rid).then((response)=>{
            setRoom(response.data);
          });
    },[rid])

    const bookRoom = () => {

        const payload = {
            bookingId: bookingId,
            bookingEmail: bookingEmail,
            bookingName: bookingName,
            bookingAddress: bookingAddress,
            bookingGovtId: bookingGovtId,
            bookingGovtIdNo: bookingGovtIdNo,
            bookingAdult: bookingAdult,
            bookingChild: bookingChild,
            bookingDays: bookingDays,
            bookingCheckIn: bookingCheckIn,
            bookingCheckOut: bookingCheckOut

        }
        axios.post('http://localhost:8083/hotel/booking/add/' + rid, payload)
            .then(response => {
                alert('Room added successfully')
                console.log(response.data)
                navigate('/showBooking')
            }).catch(error => {

        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.async = true;
            script.onload = () => {
                const options = {
                    key: "rzp_test_RVkW9MRY5Y3UDs",
                    // Enter your razorpay key here
                    // Cok2ejoZz2bEitqNTr67mwLX

                    amount: room.roomAmount * 100 * bookingDays , // amount in paise
                    currency: "INR",
                    name: "Bookings",
                    description: "Test Transaction",
                    image: "YOUR_LOGO_URL", // Add your logo URL here
                    handler: function (response) {
                        alert("Payment is successfull");
                        bookRoom();
                    },
                    prefill: {
                        name: "Saurabh",
                        email: "saurabhpawar@gmail.com",
                        contact: 9511943311,
                    },
                    notes: {
                        address: "Razorpay Corporate Office",
                    },
                    theme: {
                        color: "#3399cc",
                    },
                };
                const razorpay = new window.Razorpay(options);
                razorpay.open();
            };
            document.body.appendChild(script);
        };

    return (
        <div className='row justify-content-center pt-4' >
            <div className='col-sm-5'>
                <div className='card p-3'>
                    <div>
                        <div className='form-group'>
                            <label htmlFor='bookingId' >BookingId</label>
                            <input type='number' className='form-control' name='bookingId'
                                onChange={e => setBookingId(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='bookingEmail'>Customer Email</label>
                            <input type='email' className='form-control' name='bookingEmail'
                                onChange={e => setBookingEmail(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='bookingName'>Customer Name</label>
                            <input type='text' className='form-control' name='bookingName'
                                onChange={e => setBookingName(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='bookingAddress'>Permanent Address</label>
                            <input type='text' className='form-control' name='bookingAddress'
                                onChange={e => setBookingAddress(e.target.value)} />
                        </div>

                        <div className='form-group'>
                            <label>Government Id</label>
                            <select className='form-control' name='bookingGovtId'
                                onChange={e => setBookingGovtId(e.target.value)} >
                                <option>Choose...</option>
                                <option>Passport</option>
                                <option>Adhar Card</option>
                                <option>Pand Card</option>
                                <option>Voter Id</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='bookingGovtIdNo'>Govrenment-Id No</label>
                            <input type='text' className='form-control' name='bookingGovtIdNo'
                                onChange={e => setBookingGovtIdNo(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='bookingAdult'>No of Adults</label>
                            <input type='number' className='form-control' name='bookingAdult'
                                onChange={e => setBookingAdult(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='bookingChild'>No of Childrens</label>
                            <input type='number' className='form-control' name='bookingChild'
                                onChange={e => setBookingChild(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='bookingDays'>No of Days</label>
                            <input type='number' className='form-control' name='bookingDays'
                                onChange={e => setBookingDays(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='bookingCheckIn'>Check-in Date</label>
                            <DatePicker
                                selected={bookingCheckIn}
                                onChange={setBookingCheckIn}
                                className='form-control'
                                name='bookingCheckIn'
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='bookingCheckOut'>Check-out Date</label>
                            <DatePicker
                                selected={bookingCheckOut}
                                onChange={setBookingCheckOut}
                                className='form-control'
                                name='bookingCheckOut'
                            />
                        </div>
                        <div>
                            <p>Room No:{rid}</p>
                        </div>
                        <div>
                            <button type='button' className='btn btn-dark' onClick={handleSubmit}>Submit</button>
                            <Link to = {'/viewRoom'} className='btn btn-primary'>Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBooking