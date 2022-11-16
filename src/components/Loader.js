import React from 'react'
import loading from '../assets/loading.gif'

export const Loader = () => {
  return (
    <React.Fragment>
        <img src={`/${loading}`} alt="Loading..." style={{width: '200px', display: 'block', margin: 'auto'}} />
    </React.Fragment>
  )
}
