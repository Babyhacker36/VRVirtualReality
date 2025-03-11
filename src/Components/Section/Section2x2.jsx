import React from "react";
import { Row, Col } from "react-bootstrap";

const Section2x2 = ({ isActive, section }) => {
  if (!section) return null;

  const isYouTubeVideo = section.video && section.video.includes("youtube.com");

  return (
    <div  className={`section-2x2 ${isActive ? "active" : "hidden"}`}>
      <Row className="gx-0 vr-product-row">
        {/* Left Column - Media */}
        <Col xl={6} className="media-container">
          {section.isVideo ? (
            isYouTubeVideo ? (
              <iframe
                width="100%"
                height="315"
                src={section.video}
                title={section.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <video width="100%" height="auto" controls>
                <source src={section.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
          ) : (
            <div
              className="image-left"
              style={{
                backgroundImage: `url(${section.image})`,
                height: "inherit",
              }}
            ></div>
          )}
        </Col>

        {/* Right Column - Text Content */}
        <Col xl={6} className="text-container">
          <div className="title-container">
            <h2>
              {" "}
              <button className="header-title-btn"> {section.title} </button>
            </h2>

            <p>{section.description}</p>

            {section.video &&
              (isYouTubeVideo ? (
                <iframe
                  className="youtube-video"
                  width="100%"
                  height="415"
                  src={section.video}
                  title={section.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video width="100%" height="auto" controls>
                  <source src={section.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Section2x2;
