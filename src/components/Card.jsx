import React from 'react'

const Card = ({className, children}) => {
  return (
    <div className={`${className} bg-slate-100 border shadow-md rounded-lg`}>
      {children}
    </div>
  )
}

export default Card