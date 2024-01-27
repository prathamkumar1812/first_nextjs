import React from 'react'

function productItem({params}) {
  return (
    <div className='text-large'>productItem- {params.productid}</div>
  )
}

export default productItem