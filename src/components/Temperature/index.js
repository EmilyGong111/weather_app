import React from 'react';

const Temperature = ({value, className}) => {
  return (
    <span className={className} >{value} &#8451;</span>
  )
}

export default Temperature