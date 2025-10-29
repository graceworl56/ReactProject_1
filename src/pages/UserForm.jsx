import React from "react";
import Userinputs from "../Components/Userinputs";
import Preview from "../Components/Preview";

function UserForm() {
  return (
    <div className="container">
      <div className="row p-5">
        {/* Left column */}
        <div className="col-lg-6">
          <Userinputs />
        </div>

        {/* Right column */}
        <div className="col-lg-6">
          <Preview />
        </div>
      </div>
    </div>
  );
}

export default UserForm;
