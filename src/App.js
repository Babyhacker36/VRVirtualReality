import { Container } from "react-bootstrap";
import Navbar from "./Components/Navigation/Navbar";
import Header from "./Components/Header/Header";
import SectionData from "./Components/Section/SectionData";
import SectionFull from "./Components/Section/SectionFull";
import GridLayout from "./Components/Section/GridLayout";
import Footer from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Container fluid className="app">
      <Navbar />
      <Header id="videoBackground" />
      <SectionFull  id='meta'/>
      <SectionData id="vrHeadsets" />
      <GridLayout id='games'/>
      <Footer />
    </Container>
  );
}

export default App;
