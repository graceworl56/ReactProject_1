//page for display the finished resume
import React, { useEffect, useState } from 'react'
import Preview from '../components/Preview'
import { Link, useParams } from 'react-router-dom'
import { addHistoryAPI, getResumeAPI } from '../services/allAPI';
import { MdSimCardDownload } from "react-icons/md";
import { IoRefreshCircle } from "react-icons/io5";
import { FaBackward } from "react-icons/fa6";
import Edit from '../components/Edit';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

function ViewResume() {
  const {id}=useParams()
  console.log(id);
  const [resume,setResume]=useState({})
  useEffect(()=>{
   getResumeDetails()
  },[])

  const getResumeDetails=async()=>{
     const result=await getResumeAPI(id);
     console.log(result);
     if(result.status==200){
      setResume(result.data)
     }
  }
 const handleDownloadResume=async ()=>{
  
  // create pdf
  const doc = new jsPDF();
  const preview=document.getElementById("preview")
  preview.style.width = "700px"; 
  // take scrst of preview -hjtml2canvas
  const canvas=await html2canvas(preview,{scale:2})
  // console.log(canvas);
  // convert canvas to image
  const resumeImg = canvas.toDataURL('image/png')
  console.log(resumeImg);
  // add scrst to pdf
  const pageWidth = doc.internal.pageSize.getWidth()
  
  const imgWidth=pageWidth-20
  const imgHeight = canvas.height*imgWidth/canvas.width
  doc.addImage(resumeImg,'PNG',0,0,imgWidth,imgHeight)
  // download pdf
  doc.save(`${resume.username}-resume.pdf`)
  //local time data=new date
  const localTimeData=new Date()
  const timeStamp=`${localTimeData.toLocaleDateString()},${localTimeData.toLocaleTimeString()}`
  console.log(timeStamp);
  
  try{
    await addHistoryAPI({timeStamp,resumeImg});

  }catch(err){
    console.log(err);
    
  }

  }
  return (
    <>
    
    <div className="container my-5">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-6">
                <div className="d-flex justify-content-center align-items center ">
                  <button  onClick={handleDownloadResume}className="btn fs-4 text-primary"><MdSimCardDownload/></button>
                  <Edit resumeDetails={resume} setResumeDetails={setResume}/>
                  <Link to={'/history'} className="btn fs-4 text-primary"><IoRefreshCircle/></Link>
                  <Link to={'/resume'} className="btn fs-4 text-success"><FaBackward/></Link>
                </div>
                <div id='preview'><Preview resumeDetails={resume}/></div>
            </div>
            <div className="col-md-2"></div>
        </div>
    </div>
     
    </>
  )
}

export default ViewResume