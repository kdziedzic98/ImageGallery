import React from "react";
import { useState } from "react";
import useFirestore from "../hooks/useFirestore";
import "../styles/ImageContainer.css";
import CloseIcon from "@mui/icons-material/Close";

const ImageContainer = () => {
  const { docs } = useFirestore("images/");
  const [modal, setModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const getImage = (url) => {
    setSelectedImg(url);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setSelectedImg("");
  };

  return (
    <>
      <div className={modal ? "modal-open" : "modal"}>
        <img src={selectedImg} alt="enlarged pic" />
        <CloseIcon onClick={() => closeModal()} />
      </div>
      <div className="container">
        {docs &&
          docs.map((doc) => (
            <div
              className="wrapper"
              key={doc.id}
              onClick={() => getImage(doc.url)}
            >
              <img src={doc.url} alt="pic"></img>
            </div>
          ))}
      </div>
    </>
  );
};

export default ImageContainer;
