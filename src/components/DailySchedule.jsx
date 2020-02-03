import React, { Fragment } from 'react'
import { MDBRow, MDBCol, MDBIcon } from 'mdbreact'

const DailySchedule = ({ events }) => (
  <Fragment>
    <h3 className='text-uppercase my-3'>Daily Schedule</h3>
    <h6 className='y-3'>
      It's going to be a busy today. You have <b>{events}</b> events today.
    </h6>
    <h1 className='my-3'>
      <MDBRow>
        <MDBCol xs='3' className='text-center'>
          <MDBIcon icon='sun' fixed />
        </MDBCol>
        <MDBCol xs='9'>Sunny</MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol xs='3' className='text-center'>
          <MDBIcon icon='thermometer-three-quarters' fixed />
        </MDBCol>
        <MDBCol xs='9'>74&deg;F</MDBCol>
      </MDBRow>
    </h1>
    <p>
      Don't forget your sunglasses. Today will be dry and sunny, becoming warm
      in the afternoon with temperatures between 70&deg; and 75&deg;.
    </p>
  </Fragment>
)

export default DailySchedule
