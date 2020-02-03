import React from 'react'
import {
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBBtn,
} from 'mdbreact'

const EventModal = ({ isOpen, toggleModal, onInputChange, addEvent }) => (
  <MDBModal isOpen={isOpen} toggle={toggleModal}>
    <MDBModalHeader
      className='text-center'
      titleClass='w-100 font-weight-bold'
      toggle={toggleModal}
    >
      Add new event
    </MDBModalHeader>
    <MDBModalBody>
      <form className='mx-3 grey-text'>
        <MDBInput
          name='time'
          lable='Time'
          icon='clock'
          hint='12:30'
          group
          type='text'
          getValue={onInputChange('time')}
        />
        <MDBInput
          name='title'
          lable='Title'
          icon='edit'
          hint='Briefing'
          group
          type='text'
          getValue={onInputChange('title')}
        />
        <MDBInput
          name='location'
          lable='Location (optional)'
          icon='map'
          group
          type='text'
          getValue={onInputChange('location')}
        />
        <MDBInput
          name='description'
          lable='Description (optional)'
          icon='sticky-note'
          group
          type='textarea'
          getValue={onInputChange('description')}
        />
      </form>
    </MDBModalBody>
    <MDBModalFooter className='justify-content-center'>
      <MDBBtn
        color='info'
        onClick={() => {
          toggleModal()
          addEvent()
        }}
      >
        Add
      </MDBBtn>
    </MDBModalFooter>
  </MDBModal>
)

export default EventModal
