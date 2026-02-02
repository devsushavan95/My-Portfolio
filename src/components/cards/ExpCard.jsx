import React from 'react'

function ExpCard({ company, role, duration, description }) {
  return (
    <div className='py-12 max-md:py-8 max-sm:text-center'>
      <div className="grid grid-cols-12 gap-x-3">
        <div className="col-span-6 max-sm:col-span-12">
          <h3 className='text-4xl max-lg:text-3xl max-md:text-2xl max-sm:mb-5'>{company}</h3>
        </div>
        <div className="col-span-6 max-sm:col-span-12">
          <h4 className='text-3xl mb-2 max-lg:text-2xl max-md:text-xl '>{role}</h4>
          <h5 className='text-2xl mb-2 max-lg:text-xl max-md:text-lg '>{duration}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ExpCard