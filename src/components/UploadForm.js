import React, { useState } from "react";
import "../styles/UploadForm.css";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Alert from "@mui/material/Alert";
import Progress from "./Progress.js";

const UploadForm = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [error, setError] = useState("");

  const validTypes = ["image/jpeg", "image/png"];

  const UploadProcess = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && validTypes.includes(selectedFile.type)) {
      setImageUpload(selectedFile);
      setError("");
    } else {
      setImageUpload(null);
      setError("Please select proper file format (png or jpg format)");
    }
  };

  return (
    <form>
      <div className="uploadwrap">
        <label>
          <input type="file" onChange={UploadProcess} />
          <UploadFileIcon
            fontSize="large"
            cursor="pointer"
            htmlColor="#000"
            className="uploadIcon"
          />
        </label>
      </div>
      <div className="output">
        {error && (
          <Alert severity="error">
            <strong>{error}</strong>
          </Alert>
        )}
        {imageUpload && (
          <Progress imageUpload={imageUpload} setImageUpload={setImageUpload} />
        )}
      </div>
    </form>
  );
};

export default UploadForm;
