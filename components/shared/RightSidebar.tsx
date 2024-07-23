import React from 'react'

const RightSidebar = () => {
  return (
    <section className='custom-scrollbar rightsidebar'>
        <div className='flex flex-col flex-1 justify-start'>
            <h2 className='text-heading4-medium text-light-1'>Suggested communities</h2>
        </div>

        <div className='flex flex-col flex-1 justify-start'>
            <h2 className='text-heading4-medium text-light-1'>Suggested Users</h2>
        </div>
    </section>
  )
}

export default RightSidebar