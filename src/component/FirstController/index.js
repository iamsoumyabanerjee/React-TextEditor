import React from 'react'
import PropTypes from 'prop-types'

import Checkbox from '../Checkbox'
import { addCommas } from '../../Actions/firstControllerActions'

const FirstControlPanel = ({ state, dispatch }) => {
  const addCommasHandler = () => addCommas(state, dispatch)
  
  return (
    <div className='first-control-panel'>
      <Checkbox id='id' checked={false} name='name' label='Add spaces after each' onChangeHandler={() => false} />     
      <Checkbox id='id1' checked={true} name='name' label='Add commas afer each' onChangeHandler={addCommasHandler} />     
    </div>
  )
}

FirstControlPanel.propTyeps = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default FirstControlPanel