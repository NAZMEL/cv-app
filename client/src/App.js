import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import useRoutes from "./routes";
import NavbarBlock from "./components/Navbar/Navbar";
import { Container, Col, Row } from "react-bootstrap";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {
  const routes = useRoutes();

  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col lg="2">
            <NavbarBlock />
          </Col>
          <Col lg="8" sm="6">
            <ProfileContainer/>
            {routes}
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
