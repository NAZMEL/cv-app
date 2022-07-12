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
          <Col xxl="2" xl="2" lg="2" sm="12" className="d-md-block d-sm-none d-xs-none navBarBlock ">
            <NavbarBlock />
          </Col>
          <Col xxl xl lg sm="12" className="mainInfoBlock">
            <Container fluid>
              {routes}
            </Container>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
