import React, { useState } from "react";
import axios from "axios";
import './App.css'

function App() {
  const API_URL = "";
  const [imgfile, setImgfile] = useState([]);
  const [isUploded, setIsUploaded] = useState(false);
  const [prediction, setPrediction] = useState();
  const [isSetPrediction, setIsSetPrediction] = useState(false);

  console.log("Image FIles", imgfile);
  console.log("isUploded", isUploded);

  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      setImgfile(URL.createObjectURL(e.target.files[0]));
    }
    setIsUploaded(true);

    axios.post(API_URL).then((res) => {
      const response = res.data;
      setPrediction(response);
      setIsSetPrediction(true);
    });

  };
  return (
    <div className="App">
      <div>
        <center>
          <h2>Upload</h2>
          <input type="file" onChange={imgFilehandler} />
          <hr />
          <h2>Preview</h2>
          {isUploded ? (
            <img
              src={imgfile}
              height="300"
              width="300"
              alt="No uploded image yet"
            />
          ) : (
            <h2 No uploded image yet />
          )}

          {isSetPrediction ? <h1>pp</h1> : <h1></h1>}
          <h1></h1>
        </center>
      </div>
    </div>
  );
}
export default App;

//   const uploadImage = async e => {
//     const files = e.target.files
//     // const data = new FormData()
//     // data.append('file', files[0])
//     // data.append('upload_preset', 'darwsin')
//     setLoading(true)
//     // const res = await fetch(
//     //   '	https://api.cloudinary.com/v1_1/dihifeicm/image/upload',
//     //   {
//     //     method: 'POST',
//     //     body: data
//     //   }
//     // )
//     // const file = await res.json()
