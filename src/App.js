import "./App.css";
import ImageContainer from "./components/ImageContainer";
import Topbar from "./components/Topbar";
import UploadForm from "./components/UploadForm";

function App() {
  return (
    <div className="App">
      <Topbar />
      <UploadForm />
      <ImageContainer />
    </div>
  );
}

export default App;
