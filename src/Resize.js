import { useState } from "react";
import Resizer from "react-image-file-resizer";

export default function Resize(props) {
  const [img, setImg] = useState("");
  const [Width,setWidth] = useState("");
  const [height,setHeight] = useState("");
  const data = props.data
  console.log(data)

  const fileChangedHandler = (e) => {
    let fileInput = false;
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      fileInput = true;
    }
    if (fileInput) {
      try {
        Resizer.imageFileResizer(
          e.target.files[0],
          Width,
          height,
          "JPG",
          100,
          0,
          (uri) => {
            console.log(uri);
            setImg(uri);
          },
          "base64",
          200,
          200
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

 

  return (
    <div className="">
     <input type="file" onChange={fileChangedHandler} />
      <img src={img} alt="" />
      <input type="number" onChange={((e)=>{
        setWidth(e.target.value)
      })}/>
      <input type="number" onChange={((e)=>{
        setHeight(e.target.value)
      })}/>
    </div>
  );
}

