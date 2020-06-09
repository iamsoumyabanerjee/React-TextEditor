import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const EditControlHeader = ({ data, activeIndex, handleClick }) => (
  <div className='edit-control-headers'>
    { data.map((elm, index) => 
      (<span key={index} data-key={index} className={`control-header ${index === activeIndex && 'active'}`} onClick={handleClick}>{elm.content}</span>)
    )}
  </div>    
)

EditControlHeader.propTyeps = {
  data: PropTypes.object.isRequired,
  activeIndex: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default EditControlHeader