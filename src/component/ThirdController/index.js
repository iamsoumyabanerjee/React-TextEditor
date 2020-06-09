import React from 'react'
import PropTypes from 'prop-types'

const ThirdControlPanel = ({ state, dispatch }) => 'This is Third control'

ThirdControlPanel.propTyeps = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default ThirdControlPanel