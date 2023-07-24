import CardSlider from "./components/CardSlider";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Stack from "./components/Stack";
import Topbar from "./components/Topbar";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Topbar />
        <Home />
        <Stack />
        <CardSlider />
        <Footer />
      </div>
    </div>
  );
}

export default App;
