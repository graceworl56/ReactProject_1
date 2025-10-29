import { Divider } from '@mui/material'
import React from 'react'

function Preview() {
  return (
    <div style={{ margin: "70px" }} className="shadow p-5  w-100 rounded text-center">
      <h1>Name</h1>
      <h4>Job Title</h4>
      <h6>
        <span className='mx-2'>Location</span>
        <span className='mx-2'>Email</span>
        <span className='mx-2'>Mobile</span>
      </h6>

      <p>
        <a href="" target='_blank' className='mx-1'>GITHUB</a>
        <a href="" target='_blank' className='mx-1'>LINKEDIN</a>
        <a href="" target='_blank' className='mx-1'>PORTFOLIO</a>
      </p>

      <Divider sx={{ fontSize: '25px' }}>Summary</Divider>
      <p style={{ textAlign: 'justify' }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum non molestiae tempore in ut, dolore fugit magni officia tenetur nulla soluta ipsam enim necessitatibus itaque saepe a tempora quia quas.
      </p>

      <Divider sx={{ fontSize: '25px' }}>Education</Divider>
      <h5 className='mt-2'>Course name</h5>
      <span className='mx-2'>University</span>
      <span className='mx-2'>Passout year</span>

      <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Professional Experience</Divider>
      <h5 className='mt-2'>Job/Internship</h5>
      <p>
        <span className='mx-2'>Company Location</span>
        <span className='mx-2'>Duration</span>
      </p>
      <Divider sx={{fontSize:'25px',marginBottom :'10px'}}>Skills</Divider>
      <div className="d-flex flex-wrap justify-content-between my-3">
        <button variant="contained" className='m-1'>NODE JS</button>
      </div>
    </div>
  )
}

export default Preview
