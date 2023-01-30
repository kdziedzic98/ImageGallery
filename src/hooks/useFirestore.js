import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import { orderBy, query, onSnapshot, collection } from "firebase/firestore";

const useFirestore = (collect) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const colRef = collection(projectFirestore, collect);
    const q = query(colRef, orderBy("createdAt"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      let documents = [];
      snapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      documents.reverse();
      setDocs(documents);
    });
    return () => unsubscribe();
  }, [collect]);

  return { docs };
};

export default useFirestore;
