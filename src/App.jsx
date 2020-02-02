import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'

class App extends Component {
  state = {}
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md='9'>Left Column</MDBCol>
          <MDBCol md='3'>Right Column</MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}

export default App
