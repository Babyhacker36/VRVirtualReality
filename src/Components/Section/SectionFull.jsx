import React, { useState } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import Batman from "../../Images/BatmanArkam.webp";
import ArkamCity from "../../Images/arkam_city.webp";
import ArkamTrailer from "../../Images/Arkam_trailer.mp4";

const SectionFull = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section
        id="meta"
        className="section arkam-bg"
        style={{
          backgroundImage: `url(${ArkamCity})`,
        }}
      >
        <Row className="gx-0 full-image-row">
          <Col className="section-col-text">
            <h1 className="metah1">Meta Quest 3</h1>
            <h2>Ultimate power meets premium comfort.</h2>
          </Col>
          <Col lg={12} className="batman-image-col">
            <img src={Batman} alt="Batman Arkham" />
          </Col>
          <Col className="section-col-text bg-pill-parent">
            <div className="bg-pill">
              <p>DC LOGO and BATMAN © &™ DC</p>
              <h5>
                Discover the fun of mixed reality and get <br /> <b>Batman: </b>
                Arkham Shadow included with your purchase.
              </h5>
              <p>
                <Button
                  className="watch-btn"
                  variant="dark"
                  onClick={handleShow}
                >
                  <span> Watch Trailer</span>
                </Button>
              </p>
            </div>
          </Col>
        </Row>
      </section>

      {/* Bootstrap Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="lg"
        dialogClassName="batman-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Watch Batman: Arkham Shadow</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <iframe
            width="100%"
            height="400"
            src={ArkamTrailer}
            title="Batman Arkham Shadow Trailer"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SectionFull;
