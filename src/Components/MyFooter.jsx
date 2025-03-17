import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-start">
            <h5>Contatti</h5>
            <p>Email: info@example.com</p>
            <p>Telefono: +39 123 456 789</p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Seguici</h5>
            <a href="#" className="text-light mx-2">Facebook</a>
            <a href="#" className="text-light mx-2">Twitter</a>
            <a href="#" className="text-light mx-2">Instagram</a>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <h5>© {new Date().getFullYear()} My Website</h5>
            <p>Tutti i diritti riservati.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
