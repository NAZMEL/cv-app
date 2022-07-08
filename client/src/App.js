import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import useRoutes from "./routes";
import NavbarBlock from "./components/Navbar/Navbar";
import { Container, Col, Row } from "react-bootstrap";

function App() {
  const routes = useRoutes();

  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col lg="2" md className="navBarBlock">
            <NavbarBlock />
          </Col>
          <Col lg="10" md sm="6" className="mainInfoBlock">
              <div>{routes}</div>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
