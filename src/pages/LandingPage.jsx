import { TextareaAutosize } from '@mui/material'
import React from 'react'
import { CiTextAlignCenter } from 'react-icons/ci'
import { Link } from 'react-router-dom'
function LandingPage() {
  return (
    <div>
{/* Landing Page */}

<section
  style={{
    width: "100%",
    height: "100vh",
    backgroundImage:
      "url('https://www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png ')",
    backgroundAttachment: "fixed",
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
  
>
  <div style={{height: "100vh"}} className="container-fluid row align-items-center" >
    <div className="row w-100">
      <div className="col-md-4"></div>
      <div className="col-md-4 shadow border py-5 rounded mt-5 text-center bg-white bg-opacity-75">
        <h3>
          Designed to get hired.
          <br />
          Your skills, your story, your next job — all in one.
        </h3>
        <Link
          to="/resume"
          className="btn text-white mt-3"
          style={{ backgroundColor: "purple" }}
        >
          Make Your Resume
        </Link>
      </div>
      <div className="col-md-4"></div>
    </div>
  </div>
</section>


{/* Tools */}
 <section className="container my-5" style={{ backgroundColor: "#fff",
          marginTop: "-150px", // 👈 creates the overlap
          position: "relative",
          zIndex: 2,
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
          boxShadow: "0 -5px 20px rgba(0,0,0,0)"}}>
      <h2 className="text-center fw-bold mb-5">Tools</h2>
      <div className="row align-items-center">
        {/* Left Side - Text */}
        <div className="col-md-6">
          <h4 className="fw-bold">Resume</h4>
          <p>Create unlimited new resumes and easily edit them afterwards.</p>

          <h4 className="fw-bold mt-4">Cover Letters</h4>
          <p>Easily write professional cover letters.</p>

          <h4 className="fw-bold mt-4">Jobs</h4>
          <p>Automatically receive new and relevant job postings.</p>

          <h4 className="fw-bold mt-4">Applications</h4>
          <p>
            Effortlessly manage and track your job applications in an organized
            manner.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="col-md-6 text-center">
          <img
            src={"https://images.unsplash.com/photo-1602407294553-6ac9170b3ed0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdW1lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"}
            alt="Tools preview"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
{/* Image*/}
<section
  style={{
    height: '450px',
    width: '100%',
    backgroundImage:
      'url("https://www.icu.ac.jp/en/assets/img/academics/ph_gs_ma_01.jpg")',
    backgroundPosition: 'top',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  }}
>
</section>

{/* Tesimony */}

  <section className="m-5">
    <h1 className="text-center my-5">Testimonails</h1>
    <div className="row container">
        {/* Left Side - Text */}
        <div className="col-md-5 col-12">
          <h4 className="my-5">Trusted by professionals worldwide.
</h4>
          <p className='fs-5' style={{textAlign :'justify'}}>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.
</p>

          
          <p className='fs-5' style={{textAlign :'justify'}}>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>

         
          <p className='fs-5' style={{textAlign :'justify'}}>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>

        
        </div>

<div className='col-1'></div>
      
      
          <div className='col-md-6 col-12'>
            <div className ='row '>
              <div className='col-3'>
                <img className='w-100 h-100' src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" alt="person" />
              </div>
               <div className='col-3'>
                <img className='w-100 h-100' src="https://plus.unsplash.com/premium_photo-1664540415069-bc45ce3e711e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" alt="person" />
              </div>
               <div className='col-3'>
                <img className='w-100 h-100' src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" alt="person" />
              </div>
               <div className='col-3'>
                <img className='w-100 h-100' src="https://plus.unsplash.com/premium_photo-1677368597077-009727e906db?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwd29tZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" alt="person" />
              </div>
      
          </div>
          <div className ='row my-3'>
              <div className='col-3'>
                <img className='w-100 h-100' src="https://images.unsplash.com/photo-1543132220-3ec99c6094dc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" alt="person" />
              </div>
               <div className='col-3'>
                <img className='w-100 h-100' src="https://plus.unsplash.com/premium_photo-1661778544419-41b124812d7c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTIwd29tZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" alt="person" />
              </div>
               <div className='col-3'>
                <img className='w-100 h-100' src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwd29tZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" alt="person" />
              </div>
               <div className='col-3'>
                <img className='w-100 h-100' src="https://images.unsplash.com/flagged/photo-1573603867003-89f5fd7a7576?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" alt="person" />
              </div>
      
          </div>
          <div className ='row '>
              <div className='col-3'>
                <img className='w-100 h-100' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" alt="person" />
              </div>
               <div className='col-3'>
                <img className='w-100 h-100' src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" alt="person" />
              </div>
               <div className='col-3'>
                <img className='w-100 h-100' src="https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVuJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" alt="person" />
              </div>
               <div className='col-3'>
                <img className='w-100 h-100' src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aHVtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" alt="person" />
              </div>
      
          </div>
         
        </div>
      </div>
    
</section>
 </div>

  )
}

export default LandingPage
