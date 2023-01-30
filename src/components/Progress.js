import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import useStorage from "../hooks/useStorage";

const Progress = ({ imageUpload, setImageUpload }) => {
  const { url, progress } = useStorage(imageUpload);

  useEffect(() => {
    if (url) {
      setImageUpload(null);
    }
  }, [url, setImageUpload]);

  return (
    <>
      <CircularProgress
        variant="determinate"
        value={progress}
        className="progress-circle"
        size={40}
        thickness={4}
      />
    </>
  );
};

export default Progress;
