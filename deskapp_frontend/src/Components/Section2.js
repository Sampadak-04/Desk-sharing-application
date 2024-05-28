import React, { useState } from 'react'
import Navbar from './Navbar'
import Modal from './Modal';
import '../style/section.css';
import { useLocation } from 'react-router-dom';
const Section2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deskId, setDeskId] = useState('');
  const location = useLocation();
  const firstDate = location.state ? location.state.date1 : null;
  const lastDate = location.state ? location.state.date2 : null;
  const openModal = (deskId) => {
    setDeskId(deskId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const numbers1 = Array.from({ length: 3 }, (_, index) => index + 1);
  return (
    <div>
      <Navbar />
      <div>
      {isModalOpen && <Modal onClose={closeModal} date1={firstDate} date2={lastDate} deskId={deskId}/>}
        <div className='sec'>
          <div className='sec1'>
            <p className='sec-heading'>Section 2.a</p>
            <div className='grid-container1'>
              {numbers1.map((item) => (
                <div className='grid1'>
                  <button className='btn btn-primary btn-square-md' key={'2a.r1.' + item}
                  onClick={() => openModal('2a.r1.'+item)}>
                  </button>
                  <button className='btn btn-primary btn-square-md' key={'2a.r2.' + item}
                  onClick={() => openModal('2a.r2.'+item)}>
                  </button>
                  <button className='btn btn-primary btn-square-md' key={'2a.r3.' + item}
                    disabled={item === 3} onClick={() => openModal('2a.r3.'+item)}>
                  </button>
                  <button className='btn btn-primary btn-square-md' key={'2a.r4.' + item}
                    disabled={item === 3} onClick={() => openModal('2a.r4.'+item)}>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className='sec2'>
            <p className='sec-heading'>Section 2.b</p>
            <div className='grid-container2'>

              <div className='grid2'>
                <div className='circle'>

                  <div className='circle1'>
                    <div className='circle-desk1'>
                      <button className='btn btn-primary btn-square-md'
                      onClick={() => openModal('2b.r1.1')}>
                      </button>
                      <button className='btn btn-primary btn-square-md'
                      onClick={() => openModal('2b.r1.2')}>
                      </button>
                    </div>
                    <div className='circle-desk2'>
                      <button className='btn btn-primary btn-square-md'
                      onClick={() => openModal('2b.r2.1')}>
                      </button>
                    </div>
                  </div>

                  <div className='main-circle2'>
                    <div className='circle2'>
                      <div className='circle-desk2'>
                        <button className='btn btn-primary btn-square-md'
                        onClick={() => openModal('2b.r2.2')}>
                        </button>
                      </div>
                      <div className='circle-desk1'>
                        <button className='btn btn-primary btn-square-md'
                        onClick={() => openModal('2b.r3.1')}>
                        </button>
                        <button className='btn btn-primary btn-square-md'
                        onClick={() => openModal('2b.r3.2')}>
                        </button>
                      </div>
                    </div>
                    <div className='circle1'>
                      <div className='circle-desk1'>
                        <button className='btn btn-primary btn-square-md'
                        onClick={() => openModal('2b.r4.1')}>
                        </button>
                        <button className='btn btn-primary btn-square-md'
                        onClick={() => openModal('2b.r4.2')}>
                        </button>
                        <button className='btn btn-primary btn-square-md'
                        onClick={() => openModal('2b.r4.3')}>
                        </button>
                        <button className='btn btn-primary btn-square-md'
                        onClick={() => openModal('2b.r4.4')}>
                        </button>
                      </div>
                      <div className='circle-desk2'>
                        <button className='btn btn-primary btn-square-md'
                        onClick={() => openModal('2b.r5.1')}>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className='circle1'>
                    <div className='circle-desk1'>
                      <button className='btn btn-primary btn-square-md'
                      onClick={() => openModal('2b.r1.3')}>
                      </button>
                      <button className='btn btn-primary btn-square-md'
                      onClick={() => openModal('2b.r1.4')}>
                      </button>
                    </div>
                    <div className='circle-desk2'>
                      <button className='btn btn-primary btn-square-md'
                      onClick={() => openModal('2b.r2.3')}>
                      </button>
                    </div>
                  </div>

                </div>
                
              </div>

            </div>
          </div>
          <div className='sec2'>
            <p className='sec-heading'>Section 2.c</p>
            <div className='grid-container2'>

              <div className='grid2'>
                <div className='circle'>

                  <div className='circle1'>
                    <div className='circle-desk1'>
                      <button className='btn btn-primary btn-square-md'
                      onClick={() => openModal('2c.r1.1')}>
                      </button>
                      <button className='btn btn-primary btn-square-md'
                      onClick={() => openModal('2c.r1.2')}>
                      </button>
                    </div>
                    <div className='circle-desk2'>
                      <button className='btn btn-primary btn-square-md'
                      onClick={() => openModal('2c.r2.1')}>
                      </button>
                    </div>
                  </div>

                  <div className='main-circle2'>
                    <div className='circle2'>
                      <div className='circle-desk2'>
                        <button className='btn btn-primary btn-square-md'
                         onClick={() => openModal('2c.r2.2')}>
                        </button>
                      </div>
                      <div className='circle-desk1'>
                        <button className='btn btn-primary btn-square-md'
                        onClick={() => openModal('2c.r3.1')}>
                        </button>
                        <button className='btn btn-primary btn-square-md'
                        onClick={() => openModal('2c.r3.2')}>
                        </button>
                      </div>
                    </div>
                    <div className='circle1'>
                      <div className='circle-desk1'>
                        <button className='btn btn-primary btn-square-md'
                        onClick={() => openModal('2c.r4.1')}>
                        </button>
                        <button className='btn btn-primary btn-square-md'
                        onClick={() => openModal('2c.r4.2')}>
                        </button>
                        <button className='btn btn-primary btn-square-md'
                        onClick={() => openModal('2c.r4.3')}>
                        </button>
                        <button className='btn btn-primary btn-square-md'
                        onClick={() => openModal('2c.r4.4')}>
                        </button>
                      </div>
                      <div className='circle-desk2'>
                        <button className='btn btn-primary btn-square-md'
                        onClick={() => openModal('2c.r5.1')}>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className='circle1'>
                    <div className='circle-desk1'>
                      <button className='btn btn-primary btn-square-md'
                      onClick={() => openModal('2c.r1.3')}>
                      </button>
                      <button className='btn btn-primary btn-square-md'
                      onClick={() => openModal('2c.r1.4')}>
                      </button>
                    </div>
                    <div className='circle-desk2'>
                      <button className='btn btn-primary btn-square-md'
                      onClick={() => openModal('2c.r2.3')}>
                      </button>
                    </div>
                  </div>

                </div>
                
              </div>

            </div>
          </div>
          <div className='sec3'>
            <p className='sec-heading'>Section 2.d</p>
            <div className='grid-container3'>
              {numbers1.map((item) => (
                <div className='grid3'>
                  <button className='btn btn-primary btn-square-md' key={'2d.r1.' + item}
                  onClick={() => openModal('2d.r1.'+item)}
                  >
                  </button>
                  <button className='btn btn-primary btn-square-md' key={'2d.r2.' + item}
                  onClick={() => openModal('2d.r2.'+item)}>
                  </button>
                  <button className='btn btn-primary btn-square-md' key={'2d.r3.' + item}
                    disabled={item === 1} onClick={() => openModal('2d.r3.'+item)}>
                  </button>
                  <button className='btn btn-primary btn-square-md' key={'2d.r4.' + item}
                    disabled={item === 1} onClick={() => openModal('2d.r4.'+item)}>
                  </button>
                  
                </div>
              ))}
            </div>
          </div>

        </div>
        <p className='sec-heading'>Selected Date: {firstDate.toLocaleString("en-GB","dd-MM-yyyy")} - {lastDate.toLocaleString("en-GB","dd-MM-yyyy")}</p>
      </div>
    </div >
  )
}

export default Section2
