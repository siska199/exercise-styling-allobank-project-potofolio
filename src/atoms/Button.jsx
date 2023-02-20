import React from 'react'

const Button = (props) => {
  const {name, customeStyles}= props
  return (
    <button className={`${customeStyles}`}>
      {name}
    </button>
  )
}

export default Button