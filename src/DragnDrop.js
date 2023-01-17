import React, {useState} from 'react'
import {useDropzone} from 'react-dropzone'
import Resize from './Resize';


function DragnDrop() {
    const[files,setFiles]=useState([])
    
  const{getRootProps,getInputProps}=useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles)=>{
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
      )
      )
    },
    
  })
  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview}  alt="preview" />
      </div>
    </div>
  ))
 

    return (
        <div className='App' id="tool">
          <div className="drag-box">
            <div className="drop-box">
          {/* <div className="tool-box"> */}
            <div {...getRootProps()}>
            
          <input {...getInputProps()} directory="" webkitdirectory="" type="file"  />
          <h6>Or</h6>
          
          <p>Drag&Drop images</p>
          </div>
          </div>
          <div className="row" >
            <div className="col-6">
            <div className='img'>{images}</div>
            </div>
            
            <div className="col-6 convert">
                 
            <Resize data={files}></Resize>  
            </div>
          
          </div>
         
        </div>
        </div>
    
      );
}

export default DragnDrop