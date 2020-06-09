export const addCommas = (state, dispatch) => {
  const { content, currentSelection } = state
  const updatedSelection = currentSelection.split('').join(',')
  const updatedContent = content.replace(currentSelection, updatedSelection)

  return dispatch({type: 'ADD_COMMAS', payload: updatedContent })
}