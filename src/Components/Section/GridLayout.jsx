import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VrGame1 from "../../Images/Vrgames/vrGame1.jpg";
import VrGame2 from "../../Images/Vrgames/vrgame2.png";
import VrGame3 from "../../Images/Vrgames/vrgame3.jpg";
import VrGame4 from "../../Images/Vrgames/vrgame4.jpg";
import VrGame5 from "../../Images/Vrgames/vrgame5.jpg";

const GridLayout = () => {
  return (
    <section id="games">
      <Row className="mt-4 img-gal-row-1">
        <Col xs={12} md={5} className="image-column">
          <img src={VrGame1} alt="game" className="main-image image-fluid" />
        </Col>

        <Col xs={12} md={7}>
          <Row className="right-col-inner-row">
            <Col xs={12} md={6} className="mb-4">
              <img
                src={VrGame2}
                alt="game"
                className="grid-image image-fluid"
              />
            </Col>
            <Col xs={12} md={6} className="mb-4">
              <img
                src={VrGame3}
                alt="game"
                className="grid-image image-fluid"
              />
            </Col>
          </Row>
          <Row className="right-col-inner-row">
            <Col xs={12} md={6} className="mb-4">
              <img
                src={VrGame4}
                alt="game"
                className="grid-image image-fluid"
              />
            </Col>
            <Col xs={12} md={6} className="mb-4">
              <img
                src={VrGame5}
                alt="game"
                className="grid-image image-fluid"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default GridLayout;
