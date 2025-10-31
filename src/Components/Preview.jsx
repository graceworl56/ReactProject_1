import { Divider } from '@mui/material'
import React from 'react'

function Preview({resumeDetails}) {
  return (
    <div style={{ margin: "100px"  }} className=" ms-20 shadow p-5  w-100 rounded text-center">
      <h1>{resumeDetails?.username}</h1>
      <h4>{resumeDetails?.Jobtitle}</h4>
      <h6><span className='mx-2'>{resumeDetails?.Location}</span> |
          <span className='mx-2'>{resumeDetails?.email}</span> |
          <span className='mx-2'>{resumeDetails?.mobile}</span>
       
      </h6>

      <p className='my-2'>
        <a href="{resumeDetails?.Github}" target='_blank' className='mx-2'>GITHUB</a>|
        <a href="{resumeDetails?.LinkedIN}" target='_blank' className='mx-2'>LINKEDIN</a>|
        <a href="{resumeDetails?.portfolio}" target='_blank' className='mx-2'>PORTFOLIO</a>
      </p>

      <Divider sx={{ fontSize: '20px' ,fontWeight:'600' }}>Summary</Divider>
      <p style={{ textAlign: 'justify' }}>{resumeDetails?.Summary}
       
      </p>

      <Divider sx={{ fontSize: '20px',  fontWeight:'600'}}>Education</Divider>
      <h5 className='mt-2'>Course name</h5>
     <p>
         <span className='mt-2'>{resumeDetails?.course}</span>
         <span className='mx-2'>{resumeDetails?.college}</span>
        <span className='mx-2'>{resumeDetails?.university}</span>
        <span className='mx-2'>{resumeDetails?.passoutyear}</span>
     </p>

      <Divider sx={{ fontSize: '20px', fontWeight:'600' }}>Professional Experience</Divider>
      <h5 className='mt-2'> {resumeDetails?.JobType}</h5>
      <p>
         <span className='mx-2'> {resumeDetails?.Company}</span>
       
        <span className='mx-2'> {resumeDetails?. Clocation}</span>
        <span className='mx-2'>{resumeDetails?.duration}</span>
      </p>
      <Divider sx={{fontSize:'20px',fontWeight:'600'}}>Skills</Divider>
      <div className="d-flex flex-wrap justify-content-between my-3">


        {
        resumeDetails?.userSkills?.map((item,index)=>(
        <button variant="contained" className='m-1'>NODE JS</button>
        ))
      }
      </div>
    </div>
  )
}

export default Preview
