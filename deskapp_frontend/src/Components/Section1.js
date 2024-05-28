import React, { useEffect, useState } from 'react'
import '../style/section.css';
import Navbar from './Navbar';
import Modal from './Modal';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
const Section1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deskId,setDeskId] = useState('');
  const [firstDate,setFirstDate] = useState('')
  const [lastDate, setLastDate] = useState('')

  const location = useLocation();
  const date1 = location.state ? location.state.date1 : null;
  const date2 = location.state ? location.state.date2 : null;
  
  const openModal = (deskId) => {
    setDeskId(deskId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const[fullyBooked,setFullyBooked] = useState([]); 
  const numbers1 = Array.from({ length: 4 }, (_, index) => index + 1)
  
  const numbers2 = Array.from({ length: 16 }, (_, index) => index + 1);

  useEffect(() => {
    setFirstDate(new Date(date1))
    setLastDate(new Date(date2))
        const fetchTime = async () =>{
            try{
                //console.log('hook')
                // const response = await axios.post('http://localhost:4000/sections/getdata',{deskId:deskId, bookingDate:[firstDate,lastDate], userId:userId});
                // const bookings = response.data;
                // const desks = bookings.map(item => item.deskId);
                // //setFullyBooked(desks);
                // console.log(desks)
                
            }catch(error){
                    console.log(error)
            }
        }
        fetchTime();
    },[date1,date2]);

    const isKeyDisabled = (key) => {
      return fullyBooked.includes(key);
    };

  return (
    <div>
      <Navbar />
      {isModalOpen && <Modal onClose={closeModal} date1={firstDate} date2={lastDate} deskId={deskId}/>}
      <div className='container'>
      <p className='entry'>Entry Door</p>
        <div className='sec'>
          <div className='sec1'>
            <p className='sec-heading'>Section 1.a</p>
            <div className='grid-container1'>
              {numbers1.map((item) => (
                <div className='grid1'>
                  <button className='btn btn-primary btn-square-md' key={'1a.r1.'+item}
                    disabled>
                  </button>
                  <button className='btn btn-primary btn-square-md' key={'1a.r2.'+item}
                    disabled>
                  </button>
                  <button className='btn btn-primary btn-square-md' key={'1a.r3.'+item}
                    disabled>
                  </button>
                  <button className='btn btn-primary btn-square-md' key={'1a.r4.'+item}
                    disabled>
                  </button>
                  <button className='btn btn-primary btn-square-md' key={'1a.r5.'+item}
                    disabled>
                  </button>
                  <button className='btn btn-primary btn-square-md' key={'1a.r6.'+item}
                    disabled>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className='sec2'>
            <p className='sec-heading'>Section 1.b</p>
            <div className='grid-container2'>
            
              {numbers2.map((item) => (
                
                <div className='grid2'>
                  <button className='btn btn-primary btn-square-md' key={'1b.r1.'+item}
                    disabled={item < 7 || isKeyDisabled('1b.r1.'+item)} onClick={() => openModal('1b.r1.'+item)}>
                  </button>
                  
                    <button className='btn btn-primary btn-square-md' key={'1b.r2.'+item}
                      disabled={item < 7 || isKeyDisabled('1b.r2.'+item)} onClick={() => openModal('1b.r2.'+item)}>
                    </button>
                    <button className='btn btn-primary btn-square-md' key={'1b.r3.'+item}
                      disabled={item < 7 || item === 10 || item === 11 || isKeyDisabled('1b.r3.'+item)} onClick={() => openModal('1b.r3.'+item)}>
                    </button>
                    <button className='btn btn-primary btn-square-md' key={'1b.r4.'+item}
                      disabled={item < 7 || item === 10 || item === 11 || isKeyDisabled('1b.r4.'+item)} onClick={() => openModal('1b.r4.'+item)}>
                    </button>
                    <button className='btn btn-primary btn-square-md' key={'1b.r5.'+item}
                      disabled={item < 7 || item === 11 || isKeyDisabled('1b.r5.'+item)} onClick={() => openModal('1b.r5.'+item)}>
                    </button>
                    <button className='btn btn-primary btn-square-md' key={'1b.r6.'+item}
                      disabled={item < 7} onClick={() => openModal('1b.r6.'+item)}>
                    </button>
                    
                  </div>
              ))}
            </div>
          </div>
        </div>
        <p className='sec-heading'>Selected Date: {firstDate.toLocaleString("en-GB","dd-MM-yyyy")}- {lastDate.toLocaleString("en-GB","dd-MM-yyyy")}</p>
      </div>
    </div>

  )
}

export default Section1
