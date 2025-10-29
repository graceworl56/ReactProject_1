import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FaXmark } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const steps = ['Basic Information', 'Contact Details', 'Educational Details','Work Experience','Skill &Certification','Review & Submit'];

function Userinputs() 
 {
  const skillSuggestionArray =['NODE JS','MONGODB','EXPRESS JS','REACT','ANGULAR','LEADERSHIP','COMMUNICATION','COACHING','POWERBI','EXCEL']
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
// create state for storing resume details
 const [resumeDetails,setResumeDetails]=React.useState
( {
  username:"",
  Jobtitle:"",
  Location:"",
  email:"",
  mobile:"",
  Github:"",
  LinkedIN:"",
  portfolio:"",
  course:"",
  college:"",
  university:"",
  passoutyear:"",
  JobType:"",
  Company:"",
  Clocation:"",
  duration:"",
  userSkills:[],
  Summary :"",
 })
 
 console.log(resumeDetails);
 




  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

//   Adding new function and userinput details
const renderSteps = (stepCount)=>{
    switch(stepCount){
        case 0: return (
            <div>
                <h3>
                    Personal Details</h3>
                  <div className="row p-3">
                        <TextField value={resumeDetails.username}  onChange={e=>setResumeDetails({...resumeDetails,username:e.target.value})}id="standard-basic-name" label="Full Name" variant="standard" />
                        <TextField  value={resumeDetails.Jobtitle}onChange={e=>setResumeDetails({...resumeDetails,Jobtitle:e.target.value})} id="standard-basic-jobtitle" label="Job Title" variant="standard" />
                        <TextField value={resumeDetails.Location} onChange={e=>setResumeDetails({...resumeDetails,Location:e.target.value})} id="standard-basic-location" label="Location" variant="standard" />
                  </div>
                
            </div>
        )
        case 1: return (
            <div>
                <h3>
                    Contact Details
                </h3>
                  <div className="row p-3">
                    
                      <TextField value={resumeDetails.email}  onChange={e=>setResumeDetails({...resumeDetails,email:e.target.value})}id="standard-basic-name" label="Email" variant="standard" />
                       <TextField value={resumeDetails.mobile}  onChange={e=>setResumeDetails({...resumeDetails,mobile:e.target.value})} id="standard-basic-Number" label="Phone Number" variant="standard" />
                        <TextField  value={resumeDetails.Github} onChange={e=>setResumeDetails({...resumeDetails,Github:e.target.value})}id="standard-basic-GithubLink" label="Github " variant="standard" />
                        
                        <TextField  value={resumeDetails.LinkedIN} onChange={e=>setResumeDetails({...resumeDetails,LinkedIN:e.target.value})} id="standard-basic-LinkedeInLink" label="LinkedIn Profile Link" variant="standard" />
                        <TextField value={resumeDetails.portfolio} onChange={e=>setResumeDetails({...resumeDetails,portfolio:e.target.value})} id="standard-basic-PortfolioLink" label="Portfolio Link" variant="standard" />
                       
                 
                  </div>
            </div>
        )
        case 2: return (
            <div>
                <h3>
                    Educational Details
                </h3>
                  <div className="row p-3">
                        <TextField  value={resumeDetails.course} onChange={e=>setResumeDetails({...resumeDetails,course:e.target.value})} id="standard-basic-name" label="Course Name" variant="standard" />
                        <TextField value={resumeDetails.college}  onChange={e=>setResumeDetails({...resumeDetails,college:e.target.value})} id="standard-basic-collegename" label="College Name" variant="standard" />
                        <TextField value={resumeDetails.university} onChange={e=>setResumeDetails({...resumeDetails,university:e.target.value})} id="standard-basic-university" label="University" variant="standard" />
                        <TextField   value={resumeDetails.passoutyear}onChange={e=>setResumeDetails({...resumeDetails,passoutyear:e.target.value})}id="standard-basic-Year" label="Year of Passout" variant="standard" />
                  </div>
            </div>
        )
        case 3: return (
            <div>
                <h3>
                    Professional Details
                </h3>
                <div className="row p-3">
                        <TextField  value={resumeDetails.JobType} onChange={e=>setResumeDetails({...resumeDetails,JobType:e.target.value})}id="standard-basic-Job" label="Job or Internship" variant="standard" />
                        <TextField value={resumeDetails.Company} onChange={e=>setResumeDetails({...resumeDetails,Company:e.target.value})} id="standard-basic- Name" label="Company Name" variant="standard" />
                        <TextField value={resumeDetails.Clocation} onChange={e=>setResumeDetails({...resumeDetails,Clocation:e.target.value})} id="standard-basic-location" label=" Company Location" variant="standard" />
                        <TextField value={resumeDetails.duration} onChange={e=>setResumeDetails({...resumeDetails,duration:e.target.value})} id="standard-basic-Duration" label="Duration" variant="standard" />
                  </div>
            </div>
        )
        case 4: return (
            <div>
                <h3>
                    Skills
                </h3>
                
                <div className="d-flex align-items-center justify-content-between p-3 w-100">
                  <input  placeholder="Add Skills"type="text" className="form" />
                <button variant="text">ADD</button>
                  
                </div>
                <h5>Suggestions</h5>
                <div className="d-flex flex-wrap justify-content-between my-3">
                  {
                    skillSuggestionArray.map((item,index)=>(
                  <Button key={index} variant='outlined' className='m-1'>{item}</Button>
    ))
  }
                </div>
                <h5>Added Skills</h5>
                 <div className="d-flex -wrap justify-content-between my-3">
                 
                  <Button  variant='contained' className='m-1'>NODE JS <FaXmark className='ms-2 cursor-pointer'/>
                  </Button>

                </div>
            </div>
        )
        case 5: return (
            <div>
                <h3>
                    Summary
                    <div className='p-3 row'>
                      <TextField onChange={e=>setResumeDetails({...resumeDetails,Summary:e.target.value})} id="standard-basic-Number" label="write a short summary of yourself" variant="standard" multiline rows={7} defaultValue={
                        'Enthusiastic and adaptable Computer Science Graduate graduate with a strong foundation in [languages, e.g., Java, Python, C++] and practical experience through projects. Eager to contribute to a dynamic software development team and develop new skills'
                      } />
                    </div>
                </h3>
            </div>
        )
        default: return null
    }
  }


  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
              
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          
          

            
         
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/* render contents according to step */}
          <Box>
            {renderSteps(activeStep)}
     
            
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default Userinputs