import React, { Fragment, useState } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact'
import { Event, EventModal, DailySchedule } from './components'

const App = () => {
  const [eventModalOpen, setEventModalOpen] = useState(false)
  const onToggle = () => setEventModalOpen(!eventModalOpen)

  return (
    <Fragment>
      <MDBContainer>
        <MDBRow>
          <MDBCol md='9' className='mb-r'>
            <h2 className='text-uppercase my-3'>Today:</h2>
            <div id='schedule-items'>Events go here</div>
            <MDBRow className='mb-4'>
              <MDBCol xl='3' md='6' className='mx-auto text-center'>
                <MDBBtn color='info' rounded onClick={onToggle}>
                  Add Event
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md='3'>
            <DailySchedule />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <EventModal isOpen={eventModalOpen} toggleModal={onToggle} />
    </Fragment>
  )
}

export default App
