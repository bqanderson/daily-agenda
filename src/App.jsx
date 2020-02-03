import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'

import Event from './components/Event'

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

  handleDelete = id => {
    const events = this.state.events.filter(e => e.id !== id)
    this.setState({ events })
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md='9' className='mb-r'>
            <h2 className='text-uppercase my-3'>Today:</h2>
            <div id='schedule-items'>
              {this.state.events.map(event => (
                <Event
                  key={event.id}
                  event={event}
                  onDelete={this.handleDelete}
                />
              ))}
            </div>
          </MDBCol>
          <MDBCol md='3' />
        </MDBRow>
      </MDBContainer>
    )
  }
}

export default App
