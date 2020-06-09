import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

import EditControlHeader from '../EditControlHeader'
import FirstControlPanel from '../FirstController'
import SecondControlPanel from '../SecondController'
import ThirdControlPanel from '../ThirdController'

import { Store } from '../../store'
import './styles.scss'

/* 
* The below content can be served from other source and more keys 
* like ids, classes and many more
* 
* The id has been added as an example and can be used in future 
*/
const controllerHeaderData = [
  {
    id: 'header-index-0', // Given as examle for future use  
    content: 'First Controller'
  }, {
    id: 'header-index-1',
    content: 'Second Controller'
  }, {
    id: 'header-index-2',
    content: 'Third Controller'
  }
]

const EditController = ({ clientX, clientY }) => {
  const [activeHeaderIndex, setActiveHeaderIndex] = useState(0)
  const { dispatch, state } = useContext(Store);
  
  const handleHeaderClick = (event) => {
    const activeIndex = parseInt(event.target.dataset.key)
    
    setActiveHeaderIndex(activeIndex) 
  }
  const stopPropagationEvent = () => event.stopImmediatePropagation()
  
  return (
    <div onClick={stopPropagationEvent} className='edit-controller' style={{left: clientX, top: clientY}}>
      <EditControlHeader data={controllerHeaderData} handleClick={handleHeaderClick} activeIndex={activeHeaderIndex} />
      <div className='control-panel'>
        {0 === activeHeaderIndex && <FirstControlPanel state={state} dispatch={dispatch} />}
        {1 === activeHeaderIndex && <SecondControlPanel state={state} dispatch={dispatch} />}
        {2 === activeHeaderIndex && <ThirdControlPanel state={state} dispatch={dispatch} />}
      </div>  
    </div>
  )
}

EditController.propTyeps = {
  clientX: PropTypes.number.isRequired,
  clientY: PropTypes.number.isRequired
}

export default EditController