export const setContent = (value, dispatch) => dispatch({type: 'SET_CONTENT', payload: value })

export const getSelectedContent = (content, dispatch, selectionStart, selectionEnd) => {
  const payload = content.substring(selectionStart, selectionEnd)

  return dispatch({type: 'SELECTED_CONTENT', payload })
}