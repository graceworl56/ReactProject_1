import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div
      style={{ height: '80vh' }}
      className="d-flex justify-content-center align-items-center my-5 p-5 flex-column"
    >
      <img
        width="50%"
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="Page Not Found"
      />
      <h4 className="mt-3">Page Not Found</h4>

      <Link className="btn btn-primary mt-2" to="/">
        Go to Home
      </Link>
    </div>
  )
}

export default Pnf
