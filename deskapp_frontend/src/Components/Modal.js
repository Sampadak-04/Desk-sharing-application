import React, { useEffect, useState } from 'react'
import '../style/modal.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import BookedDatesDisplay from './BookedDatesDisplay';
import {TailSpin} from 'react-loader-spinner';

const Modal = ({ onClose, date1, date2, deskId }) => {
    const navigate = useNavigate();
    const [msg, setMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('')
    const [loading,setLoading] = useState(false)

    const user = JSON.parse(localStorage.getItem('user'));
    const id = user._id;

    const [bookedDates, setBookedDates] = useState([])
    const [dates, setDates] = useState([]);
    const firstDate = new Date(date1);
    const lastDate = new Date(date2);
    //const sDate = firstDate.toLocaleDateString('en-GB', "dd/MM/yyyy");

    // const [formData, setFormData] = useState({
    //     deskId: deskId,
    //     bookingDate: dates,
    //     userId: id
    // });

    useEffect(() => {
        const fetchBookings = () => {
            const newDates = [];

            let currentDate = new Date(firstDate)
            while (currentDate <= lastDate) {
                newDates.push(currentDate.toLocaleDateString("en-GB", "dd-MM-yyyy"))
                currentDate.setDate(currentDate.getDate() + 1);
            }
            //console.log(newDates);
            setDates(newDates)
        }
        fetchBookings();
    }, [])
    const handleSubmit = async (event) => {
        event.preventDefault();
        setMsg('')
        setErrorMsg('')
        setLoading(true)
        try {
            const response = await axios.post('http://localhost:4000/desks/booking', { deskId: deskId, bookingDate: dates, userId: id })
            if (response.data.flag === true)
                setMsg('Desk Booked for all dates!')
            else if (response.data) {
                const booked = response.data;
                const lst = booked.map(item => item.bookingDate)
                setBookedDates(lst)
            }
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    if(loading){
        return(
            <div className='loader-container'>
                <TailSpin color="#e20074" height={80} width={80}/>
            </div>
        );
    }
    const bookDeskAvailable = async() => {
        setLoading(true)
        try {
            const response = await axios.post('http://localhost:4000/desks/bookavailable', { deskId: deskId, bookingDate: dates, userId: id })
            if (response.data)
                setMsg('Desk Booked!')
        } catch (error) {
            if(error.response && error.response.status === 400){
                setErrorMsg(error.response.data.error)
            }else{
                console.log(error)
            }
        }finally{
            setLoading(false)
        }
    }
    
    return (
        <div className="modal">
            <div className='modal-dialog'>
                <div className='modal-content'>
                    {(msg !== '') ? <div className='alert alert-success'>{msg}</div>
                        : ''}
                    {(errorMsg !== '') ? <div className='alert alert-warning'>{errorMsg}</div>
                        : ''}
                    <div className='modal-header'>
                        <p>Selected Dates: {dates[0]} - {dates[dates.length-1]}</p>
                        <p>
                            {(bookedDates.length !== 0) ? `Desk is not available for following dates:` : ''}
                        </p>
                        <p>
                                <BookedDatesDisplay bookedDates={bookedDates}/>
                        </p>
                        {(bookedDates.length !== 0) ? (
                            <p>
                                Do you want to book for available dates? <button className='btn btn-primary' onClick={bookDeskAvailable}>Click here</button>
                            </p>)
                            : ''}
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Close</button>
                            <button type="submit" className="btn btn-primary">Book Desk</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal