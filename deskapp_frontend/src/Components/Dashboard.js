import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import '../style/dashboard.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../style/horizontalDatePicker.css';
import { addDays } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Dashboard = () => {
  const navigate = useNavigate();
  const today = new Date();
  const tomorrow = addDays(today, 1)
  const day = tomorrow.getDay();

  const user = JSON.parse(localStorage.getItem('user'));
  const id = user._id;

  const [userBookings, setUserBookings] = useState([]);
  const [firstDate, setFirstDate] = useState(null);
  const [lastDate, setLastDate] = useState(null);
  const [maxDate, setMaxDate] = useState('');
  const [errorMsg, setErrorMsg] = useState('');


  useEffect(() => {
    const fetchUserDesks = async (req, res) => {
      var idx = 0;
      setMaxDate(addDays(tomorrow,30))
      // switch (day) {
      //   case 0:
      //     setMaxDate(addDays(tomorrow,5))
      //     break;
      //   case 1:
      //     setMaxDate(addDays(tomorrow,4))
      //     break;
      //   case 2:
      //     setMaxDate(addDays(tomorrow,3))
      //     break;
      //   case 3:
      //     setMaxDate(addDays(tomorrow,9))
      //     break;
      //   case 4:
      //     setMaxDate(addDays(tomorrow,8))
      //     break;
      //   case 5:
      //     setMaxDate(addDays(tomorrow,7))
      //     break;
      //   case 6:
      //     setMaxDate(addDays(tomorrow,6))
      //     break;
      // }
      try {
        const response = await axios.get(`http://localhost:4000/sections/getuserdesks?userId=${id}`)
        setUserBookings(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserDesks();
  },[]);

  const validateDates = (date) => {
    const day = date.getDay();
    if (day == 0 || day == 6) {
      setErrorMsg('Saturday and Sunday are not working days')
      return false;
    }else{
      return true;
    }
  }

  const handlefDateChange = (date) => {
    setErrorMsg('')
    setFirstDate(date);
    var r = validateDates(date)
    if(r == false)
      setFirstDate(addDays(date,2))
  }
  const handlelDateChange = (date) => {
    setErrorMsg('')
    setLastDate(date);
    var r = validateDates(date)
    if(r == false)
      setLastDate(addDays(date,2))

  }
  const goToSec1 = () => {
    if(!firstDate || !lastDate){
      setErrorMsg('Please choose both first and last dates')
      return;
    }
    navigate('/section1', { state: { date1: firstDate, date2: lastDate } });
  }
  const goToSec2 = () => {
    if(!firstDate || !lastDate){
      setErrorMsg('Please choose both first and last dates')
      return;
    }
    navigate('/section2', { state: { date1: firstDate, date2: lastDate } });
  }
  //const numbers1 = Array.from({ length: 1 }, (_, index) => index + 1);
  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='card'>
          <div className='dash-content'>
            <h2>Book Your Desks</h2>
          </div>
          <div className='card-body'>
            <div className='content-card'>
              <form>
                <div style={{ color: 'red' }}>*Note: You can choose only working days (Monday - Friday)</div><br />
                <div className='date-picker'>
                  <div className='pdate'>Choose First Date:</div>
                  <div className='picker-parent'>
                    <DatePicker className='picker'
                      selected={firstDate}
                      onChange={handlefDateChange}
                      dateFormat="dd/MM/yyyy"
                      minDate={tomorrow}
                      maxDate={maxDate}
                      required
                    />
                  </div>
                </div>
                <div className='date-picker'>
                  <div className='pdate'>Choose Last Date:</div>
                  <div className='picker-parent'>
                    <DatePicker className='picker'
                      selected={lastDate}
                      onChange={handlelDateChange}
                      dateFormat="dd/MM/yyyy"
                      minDate={tomorrow}
                      maxDate={maxDate}
                      required
                    />
                  </div>
                </div>
                {errorMsg && <div style={{ color: 'red' }}>{errorMsg}</div>}
                <br />
                <div className='section-picker'>
                  <p className='pdate'>Select a Section for Booking on </p>
                  <button onClick={goToSec1} className='btn btn-primary'>Section1</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button onClick={goToSec2} className='btn btn-primary'>Section2</button>
                </div>
              </form>
              <br /><br /><br />
              <div className='dash-content'>
                <h2>Your Bookings</h2>
              </div>
              <table className='table'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Desk ID</th>
                  </tr>
                </thead>
                <tbody>
                  {userBookings.map((item, index) => (
                    <tr className='table table-light'>
                      <td>{index + 1}</td>
                      <td>{item.bookingDate}</td>
                      <td>{item.deskId}</td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
