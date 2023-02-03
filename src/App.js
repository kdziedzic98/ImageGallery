import "./App.css";
import ImageContainer from "./components/ImageContainer";
import Topbar from "./components/Topbar";
import UploadForm from "./components/UploadForm";
import background from "./images/background.png";

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };
  return (
    <div className="App" style={backgroundStyle}>
      <Topbar />
      <div className="containerApp">
        <UploadForm />
        <ImageContainer />
      </div>
    </div>
  );
}

export default App;
