import React from 'react'
import PropTypes from 'prop-types'

const SecondControlPanel = ({ state, dispatch }) => 'This is Second control'

SecondControlPanel.propTyeps = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default SecondControlPanel