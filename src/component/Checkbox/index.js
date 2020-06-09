import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const Checkbox = ({ id, label, styleClass, value, onChangeHandler }) => {
  const [checkedState, setCheckedState] = useState(false)

  const onclickHandler = () => checkedState ? setCheckedState(false) : setCheckedState(true)
  return (
    <div className={`checkbox ${styleClass}`}>
      <input onChange={onChangeHandler} id={id} checked={checkedState} type='checkbox' value={value} />
      <label htmlFor={id} onClick={onclickHandler}>{label}</label>
    </div>
  )
}

Checkbox.propTyeps = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  styleClass: PropTypes.string,
  value: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired
}

Checkbox.defaultProps = {
  styleClass: '',
  value: 'true',
  checked: false
}

export default Checkbox

