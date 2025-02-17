import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap"; //import the Reactstrap Components
import Header from "./Components/Header";
import Home from "./Components/Home";
const App = () => {
  return (
    <Container fluid>
      <Router>
        <Row>
          <Header />
        </Row>
        <Row>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Row>

        <Row></Row>
      </Router>
    </Container>
  );
};

export default App;
