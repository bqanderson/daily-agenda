import React, { Fragment } from 'react'
import { MDBBadge, MDBIcon } from 'mdbreact'
import PropTypes from 'prop-types'

const Event = ({ event, onDelete }) => {
  const { id, time, title, location, description } = event

  return (
    <Fragment>
      <div className='media mt-1'>
        <h3 className='h3-responsive font-weight-bold mr-3'>{time}</h3>
        <div className='media-body mb-3 mb-lg-3'>
          <MDBBadge
            color='danger'
            className='ml-2 float-right'
            onClick={() => onDelete(id)}
          />
          <h6 className='mt-0 font-weight-bold'>{title}</h6>
          <hr className='hr-bold my-2' />
          {location && (
            <Fragment>
              <p className='font-smaller mb-0'>
                <MDBIcon icon='location-arrow' /> {location}
              </p>
            </Fragment>
          )}
        </div>
      </div>
      {description && (
        <p className='p-2 mb-4 blue-grey lighten-5'>{description}</p>
      )}
    </Fragment>
  )
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
}

export default Event
