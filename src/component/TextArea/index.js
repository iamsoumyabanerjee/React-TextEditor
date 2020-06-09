import React, { useState, useEffect, useContext } from 'react'

import EditController from '../EditController'
import { getSelectedContent, setContent } from '../../Actions/textAreaActions'
import { Store } from '../../store'
import './styles.scss'

const VISIBLE_EDITOR = 'VISIBLE_EDITOR'
const HIDDEN_EDITOR = 'HIDDEN_EDITOR'

const TextArea = () => {
  const [editorVisibility, setEditorVisbility] = useState(HIDDEN_EDITOR)
  const [coordinates, setEditorCoordinates] = useState({})
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    document.addEventListener('click', handleClickOutSide)

    return () => document.removeEventListener('click', handleClickOutSide)
  })

  const handleClickOutSide = () => setEditorVisbility(HIDDEN_EDITOR)

  const handleMouseup = (event) => {
    const { clientX, clientY, target } = event  
    if (target.selectionStart !== target.selectionEnd) {
      setEditorVisbility(VISIBLE_EDITOR)
      setEditorCoordinates({ clientX, clientY: clientY+20  })
      getSelectedContent(state.content, dispatch, target.selectionStart, target.selectionEnd)
    }
  }

  const handleKeyPress = (event) => {
    setContent(event.target.value, dispatch)
  }

  return ( 
    <div className='textarea-container'>
      <h2>Enter your copy</h2>
      <textarea onMouseUp={handleMouseup} onChange={handleKeyPress} className='text-area' value={state.content}></textarea> 
      { editorVisibility ===  VISIBLE_EDITOR  && 
        <EditController
          clientX={coordinates.clientX}
          clientY={coordinates.clientY} 
        /> 
      }
    </div>
  )
}

export default TextArea