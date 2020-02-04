import React, { Fragment, useState, useEffect } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact'
import { Event, EventModal, DailySchedule } from './components'

const App = () => {
  const [eventModalOpen, setEventModalOpen] = useState(false)
  const [events, setEvents] = useState([])
  const [currentEvent, setCurrentEvent] = useState({})

  useEffect(() => {
    getEvents()
    // esling-disable-next-line
  }, [])

  const getEvents = async () => {
    const res = await fetch('/events')
    const data = await res.json()
    setEvents(data)
  }

  const addEvent = () => {
    const newEvent = {
      ...currentEvent,
      id: events.length ? events[events.length - 1].id + 1 : 1,
    }
    setEvents([...events, newEvent])
  }

  const handleInputChange = inputName => value =>
    setCurrentEvent({ ...currentEvent, [inputName]: value })

  const handleDelete = id => setEvents(events.filter(event => event.id !== id))

  const onToggle = () => {
    setEventModalOpen(!eventModalOpen)
    setCurrentEvent({})
  }

  return (
    <Fragment>
      <MDBContainer>
        <MDBRow>
          <MDBCol md='9' className='mb-r'>
            <h2 className='text-uppercase my-3'>Today:</h2>
            <div id='schedule-items'>
              {events.map(event => (
                <Event key={event.id} event={event} onDelete={handleDelete} />
              ))}
            </div>
            <MDBRow className='mb-4'>
              <MDBCol xl='3' md='6' className='mx-auto text-center'>
                <MDBBtn color='info' rounded onClick={onToggle}>
                  Add Event
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md='3'>
            <DailySchedule events={events.length} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <EventModal
        isOpen={eventModalOpen}
        onInputChange={handleInputChange}
        addEvent={addEvent}
        toggleModal={onToggle}
      />
    </Fragment>
  )
}

export default App
