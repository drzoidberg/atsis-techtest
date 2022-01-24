import React from 'react'
import classes from './CharacterQuote.module.scss'

function CharacterQuote({ selector }) {
  return (
    <p className={`d-flex px-xs-4 px-sm-4 px-md-3 px-lg-3 px-xl-3 px-xxl-3 m-5`}>
      {selector.status === 'rejected' && 'ERROR!'}
      {selector.status === 'pending' && 'loading content…'}
      {selector.status === 'fulfilled' && (
        <span className={`${classes['quote']}`}>{selector.data?.quote || 'No quotes available'}</span>
      )}
    </p>
  )
}

export default CharacterQuote
