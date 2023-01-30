import { useState, useEffect } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { projectStorage, projectFirestore } from "../firebase/config";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!file) return;
    const storageRef = ref(projectStorage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    const collRef = collection(projectFirestore, "images/");

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => setError(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          addDoc(collRef, {
            createdAt: serverTimestamp(),
            url: downloadUrl,
          });
          setUrl((prev) => ({ ...prev, url: downloadUrl }));
        });
      }
    );
  }, [file]);
  return { progress, url, error };
};

export default useStorage;
