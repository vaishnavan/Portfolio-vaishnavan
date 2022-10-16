/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
// import ReactDOM from 'react-dom';
// import { Viewer } from '@react-pdf-viewer/core';
import './resumepdf.css'

const ResumePdf = () => {
  const [shown, setShown] = useState(false)

  return (
    <>
      <div className="resume-container">
        <div>
          <a
            target={'resume_frame'}
            href="https://vaishnavan-resume-pdf.netlify.app/"
          >
            <button
              style={{
                backgroundColor: '#00449e',
                border: 'none',
                borderRadius: '.25rem',
                color: '#fff',
                cursor: 'pointer',
                padding: '.5rem',
              }}
              onClick={() => setShown(true)}
            >
              <img src="/images/vaishnavanresume.png" alt="resumepdf" />
            </button>
          </a>
         
        </div>
      </div>
      <div style={{margin:"10px 0"}} className='resume-container-btn'>
        <div className='resume-btn'>
        <a target="_blank" download href='/pdf/VAISHNAVAN-M.pdf'><button>Download</button></a>
        <a target="_blank" href='https://vaishnavan-resume-pdf.netlify.app/'><button>Preview</button></a>
        </div>
      </div>
    </>
  )
}

export default ResumePdf
