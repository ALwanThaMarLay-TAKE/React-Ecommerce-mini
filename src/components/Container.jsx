import React from 'react'

const Container = ({children , className , ...props }) => {
  return (
    <div className={`container p-4 mx-auto ${className}`}  {...props} >{children}
     </div>
  )
}

export default Container