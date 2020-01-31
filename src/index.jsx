import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'

import './index.css'

class App extends Component {
  state = {}
  render() {
    return (
      <Fragment>
        <MDBContainer>
          <MDBRow>
            <MDBCol lg='6'>Left Column</MDBCol>
            <MDBCol lg='6'>Right Column</MDBCol>
          </MDBRow>
        </MDBContainer>
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
