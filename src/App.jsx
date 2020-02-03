import React, { Component, Fragment } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact'

import { Event, EventModal, DailySchedule } from './components'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      events: [
        {
          id: 1,
          time: '10:00',
          title: 'Breakfast with Simon',
          location: 'Lounge Caffe',
          description: 'Discuss Q3 targets',
        },
        {
          id: 2,
          time: '10:30',
          title: 'Daily Standup Meeting (recurring)',
          location: 'Warsaw Spire Office',
        },
        { id: 3, time: '11:00', title: 'Call with HRs' },
        {
          id: 4,
          time: '12:00',
          title: 'Lunch with Timmothy',
          location: 'Canteen',
          description:
            'Project evalutation ile declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a',
        },
      ],
    }
  }

  addEvent = () => {
    let newArray = [...this.state.events]
    newArray.push({
      id: newArray.length ? newArray[newArray.length - 1].id + 1 : 1,
      time: this.state.time,
      title: this.state.title,
      location: this.state.location,
      description: this.state.description,
      value: this.var > 5 ? 'Its grater than 5' : 'Its lower or equal to 5',
    })
    this.setState({ events: newArray })
    this.setState({
      time: '',
      title: '',
      location: '',
      description: '',
    })
  }

  handleInputChange = inputName => value =>
    this.setState({ [inputName]: value })

  handleDelete = id => {
    const events = this.state.events.filter(e => e.id !== id)
    this.setState({ events })
  }

  toggleModal = () => this.setState({ modal: !this.state.modal })

  render() {
    const { events, modal } = this.state
    return (
      <Fragment>
        <MDBContainer>
          <MDBRow>
            <MDBCol md='9' className='mb-r'>
              <h2 className='text-uppercase my-3'>Today:</h2>
              <div id='schedule-items'>
                {events.map(event => (
                  <Event
                    key={event.id}
                    event={event}
                    onDelete={this.handleDelete}
                  />
                ))}
              </div>
              <MDBRow className='mb-4'>
                <MDBCol xl='3' md='6' className='mx-auto text-center'>
                  <MDBBtn color='info' rounded onClick={this.toggleModal}>
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
          isOpen={modal}
          onInputChange={this.handleInputChange}
          addEvent={this.addEvent}
          toggleModal={this.toggleModal}
        />
      </Fragment>
    )
  }
}

export default App
