import React from 'react'

function ExpCard({ company, role, duration, description }) {
  return (
    <div className='py-12'>
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <h3 className='text-4xl'>{company}</h3>
        </div>
        <div className="col-span-6">
          <h4 className='text-3xl mb-2'>{role}</h4>
          <h5 className='text-2xl mb-2'>{duration}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ExpCard