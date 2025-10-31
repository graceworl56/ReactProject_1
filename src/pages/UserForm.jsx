import React from "react";
import Userinputs from "../Components/Userinputs";
import Preview from "../Components/Preview";

function UserForm() {
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
  return (
    <div className="container">
      <div className="row p-4 ms-0">
        {/* Left column */}
        <div className="col-lg-6 ms-0">
          <Userinputs resumeDetails={resumeDetails} setResumeDetails={setResumeDetails} />
        </div>

        {/* Right column */}
        <div className="col-lg-6 mx-0">
      { resumeDetails.username &&
        <Preview resumeDetails={resumeDetails}  />
        }
        </div>
      </div>
    </div>
  );
}

export default UserForm
