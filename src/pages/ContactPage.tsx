import React from 'react'

const ContactPage = () => {
  return (
   <div   className='overflow-hidden h-screen w-full relative flex justify-center px-34 bg-cover bg-center rounded-b-4xl'
      style={{ backgroundImage: `url(${ContactBg})` }}>
        <div className='flex  justify-between items-center gap-11 px-5'>
            <div className='flex flex-col gap-5 mt-[-50px] w-152  text-white items-start  '>

   <div>
   <h1 className='text-5xl font-medium '>Empowering the MSMEs with instant access and instant solutions.</h1> 
   </div>

<div>
<div className='flex flex-col gap-2'>
    <div className='flex  gap-2'>
      <p>p</p>
        <h3>From Approval to Account- Instantly</h3>
    </div>
    <div className='flex  gap-2'>
      <p>p</p>
    <h3>Fast Track Your Funding</h3>
    </div>
    
    
</div>
</div>
            </div>
            <div className='mt-33'>
              <ContactForm/>
            </div>
        </div>
        
    </div>
  )
}

export default ContactPage