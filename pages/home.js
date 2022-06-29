import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ReduxServices from 'common/reduxService'
const home = () => {
  const state = useSelector(state => state.getName)
  const dispatch = useDispatch()
  const setState = () => {
    // dispatch({ type: 'SET_NAME', payload: 'dien thanh' })
    ReduxServices.setName('dien thanh')
  }
  setTimeout(() => {
    setState()
  }, 5000)
  console.log({ state })
  return (
    <div>home {state} lalalalal</div>
  )
}

export default home
