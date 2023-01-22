
import React, {useState} from 'react';




export default function Resize() {
  // const [img, setImg] = useState("");
  const [Width,setWidth] = useState("");
  const [height,setHeight] = useState("");
  const previewImg = uploadBox.querySelector("img");

 
	
 const fileChangedHandler = () => {
  
    let fileInput = true;
    // if (e.target.files) {
    //   console.log(e.target.files[0]);
    //   fileInput = true;
    
    
    if (fileInput)  {
     
        console.log('done');
        let files= document.getElementById("file").files
        console.log(files)

      try {
        for(let i =0; i<files.length;i++) {
        previewImg.src = URL.createObjectURL(files[i]);
      } 
    }
      catch (err) {
        console.log(err);
      }
    
   
   
};

  

 

 
  return (
   

     <div >
        
            
            <input   type="file" id="file" webkitdirectory="" directory="" />
     
      {/* <input type="number" onChange={((e)=>{
        setWidth(e.target.value)
      })}/>
      <input type="number" onChange={((e)=>{
        setHeight(e.target.value)
      })}/> */}
      <button onClick ={fileChangedHandler}>resize</button>
      <a href={img} download="maaz.jpg"><img src={img} alt=""  /></a>
    </div>
  

  
  );
    }
}


  