import React from 'react';
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { useRef, useState } from 'react';


export default function Resize() {


  const inputRef = useRef(null);

  let [file1, setFile] = useState("");



  const onZip = () => {
    const zip = new JSZip();
    const files = Array.from(file1);

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



    const file = e.target.files[0];
    if (!file) return;
    const files = e.target.files;
    setFile(files)
    document.querySelector(".wrapper").classList.add("active");
  }
  const resizeAndDownload = (e) => {
    const canvas = document.createElement("canvas");
    const a = document.createElement("a");
    const ctx = canvas.getContext("2d");
    const widthInput = document.querySelector(".width input");
    const heightInput = document.querySelector(".height input");
    const uploadBox = document.querySelector(".upload-box");
    const previewImg = uploadBox.querySelector(".img");
    canvas.width = widthInput.value;
    canvas.height = heightInput.value;

    for (let i = 0; i < file1.length; i++) {
      console.log(1);
      previewImg.src = URL.createObjectURL(file1[i]);

      previewImg.addEventListener("load", () => {
        widthInput.value = previewImg.naturalWidth;
        heightInput.value = previewImg.naturalHeight;

        ctx.drawImage(previewImg, 0, 0, canvas.width, canvas.height);
        a.href = canvas.toDataURL("image/jpeg");
        console.log(a.href, "what color is the sky?")



        a.download = new Date().getTime();
        a.click();
        file1[i].src = canvas.toDataURL("image/jpeg");

      });
    }
    console.log("done");
  }


  return (


    <div className="wrapper">
      <div className="upload-box">
        <input className='input' onChange={loadFile} type="file" webkitdirectory="" directory="" accept="image/*" ref={inputRef} />
        <img className='img' src="https://www.codingnepalweb.com/demos/resize-and-compress-image-javascript/upload-icon.svg" alt="" />
        <p>Browse File to Upload</p>
      </div>
      <div className="content">
        <div className="row sizes">
          <div className="column width">
            <label>Width</label>
            <input type="number" />
          </div>
          <div className="column height">
            <label>Height</label>
            <input type="number" />
          </div>
        </div>
        <div className="row checkboxes">
          <div className="column ratio">
            <input type="checkbox" id="ratio" checked />
            <label for="ratio">Lock aspect ratio</label>
          </div>
          <div className="column quality">
            <input type="checkbox" id="quality" />
            <label for="quality">Reduce quality</label>
          </div>
        </div>
        <button className="download-btn" onClick={resizeAndDownload} >Download Image</button>
        <button onClick={onZip}>convert to zip</button>
      </div>

    </div>





  );

};