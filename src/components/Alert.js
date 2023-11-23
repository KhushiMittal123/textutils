import React from 'react'

export default function Alert(props) {
  return (
   props.modesE&& <div id="alertcom" style={{height:'50px'}}>
      <div className="alert alert-warning alert-dismissible fade show" role="alert"> 
  <strong>{props.modesE} Mode</strong> Enabled!
  {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
    </div>
  )
}
