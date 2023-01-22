
import React from 'react';
import JSZip from "jszip";
import { saveAs } from "file-saver";
import {useRef,useState} from 'react';




export default function Resize() {
  // const uploadBox = document.querySelector(".upload-box");
  // const widthInput = document.querySelector(".width input"); 
  // const heightInput = document.querySelector(".height input");

  const inputRef = useRef(null);
  

  const onZip = () => {
    const zip = new JSZip();
    const files = Array.from(inputRef.current.files);

    files.forEach((file) => {
      console.log(file)
      zip.file(file.webkitRelativePath, file);
    });
    zip
      .generateAsync({ type: "blob" })
      .then(function (content) {
        saveAs(content, "files.zip");

        const formData = new FormData();
        formData.append("folderzip", content);
        console.log("ready to send to server", content);
      })
      .catch((e) => console.log(e));
  };
  
  
  const loadFile = (e) => {
    const uploadBox = document.querySelector(".upload-box");
    const previewImg = uploadBox.querySelector(".img");
    const widthInput = document.querySelector(".width input"); 
    const heightInput = document.querySelector(".height input");

      const file = e.target.files[0]; 
      if(!file) return; 
      const files = e.target.files;
      for(let i=0;i<files.length;i++){
      previewImg.src = URL.createObjectURL(files[i]); 
      previewImg.addEventListener("load", () => { 
          widthInput.value = previewImg.naturalWidth;
          heightInput.value = previewImg.naturalHeight;
          document.querySelector(".wrapper").classList.add("active");
      });
    }
  }
  const resizeAndDownload = () => {
      const canvas = document.createElement("canvas");
      const a = document.createElement("a");
      const ctx = canvas.getContext("2d");
      const widthInput = document.querySelector(".width input"); 
      const heightInput = document.querySelector(".height input");
      const uploadBox = document.querySelector(".upload-box");
      const previewImg = uploadBox.querySelector(".img");
      canvas.width = widthInput.value;
      canvas.height = heightInput.value;
  
      
      ctx.drawImage(previewImg, 0, 0, canvas.width, canvas.height);
      console.log(a)
      
      a.href = canvas.toDataURL("image/jpeg");
      const img = canvas.toDataURL("image/jpeg");
      console.log(img)
      
      a.download = new Date().getTime(); 
      a.click(); 
  }
  

    const click1 = ()=>{
      console.log("Hello")
      const fileInput = document.querySelector(".input")
      fileInput.click()
    }
    

 

 
  return (
   

<div className="wrapper">
      <div className="upload-box" onClick={click1}>
        <input className='input' onChange={loadFile} type="file" webkitdirectory="" directory="" accept="image/*" ref={inputRef}/>
        <img className='img' src="https://www.codingnepalweb.com/demos/resize-and-compress-image-javascript/upload-icon.svg" alt=""/>
        <p>Browse File to Upload</p>
      </div>
      <div className="content">
        <div className="row sizes">
          <div className="column width">
            <label>Width</label>
            <input type="number"/>
          </div>
          <div className="column height">
            <label>Height</label>
            <input type="number"/>
          </div>
        </div>
        <div className="row checkboxes">
          <div className="column ratio">
            <input type="checkbox" id="ratio" checked/>
            <label for="ratio">Lock aspect ratio</label>
          </div>
          <div className="column quality">
            <input type="checkbox" id="quality"/>
            <label for="quality">Reduce quality</label>
          </div>
        </div>
        <button className="download-btn" onClick={resizeAndDownload} >Download Image</button>
        <button onClick={onZip}>convert to zip</button>
      </div>
    </div>


  

  
  );
    
};


  