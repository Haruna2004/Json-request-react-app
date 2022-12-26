import React from 'react'

const Button = ({ reqType,buttonText,setReqType }) => {
  return (
    <button
        type='button'
        className={reqType === buttonText?"selected":null}
        onClick={() => setReqType(buttonText)}
    >
    {buttonText}
    </button>
  )
}

export default Button