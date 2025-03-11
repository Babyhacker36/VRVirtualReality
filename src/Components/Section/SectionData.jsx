import React, { useState } from "react";
import Section2x2 from "./Section2x2";

import Halolens from "../../Images/Microsoft_HaloLens.png";
import AppleVisionPro from "../../Images/apple_vision_pro.png";
import PlaystationVr2 from "../../Images/playstation_vr2.png";
import Vive from "../../Images/vive_htc_2.png";

const sectionsData = [
  {
    id: "section1",
    title: "Microsoft HaloLens 2",
    description:
      "HoloLens 2 coupled with software solutions is a hands-free computer that goes where you go, sees what you see, and does what you say.",
    image: Halolens,
    video: "https://www.youtube.com/embed/eqFqtAJMtYE",
    isVideo: false,
  },
  {
    id: "section2",
    title: "Apple Vision Pro",
    description:
      "Apple Vision Pro seamlessly blends digital content with your physical space. o you can work, watch, relive memories, and connect in ways never before possible",
    image: AppleVisionPro,
    video: "https://www.youtube.com/embed/TX9qSaGXFyg",
    isVideo: false,
  },
  {
    id: "section3",
    title: "PlayStation VR2",
    description:
      "Experience the next generation of virtual reality play with stunning 4K HDR visuals, genre-defining games, and unique sensations from the PlayStation VR2 headset.",
    image: PlaystationVr2,
    video: "https://www.youtube.com/embed/tFqc5-HEBMY",
    isVideo: false,
  },
  {
    id: "section4",
    title: "HTC Vive Pro 2",

    description:
      "Next-level graphics and sound for riveting PC-VR. Purposeful and pragmatic ergonomics delivers smooth and comfortable immersion.",
    image: Vive,
    video: "https://www.youtube.com/embed/AiUX8lQGh2w",
    isVideo: false,
  },
];

const SectionData = () => {
  const [activeSection, setActiveSection] = useState("section1");
  const [videoKey, setVideoKey] = useState(0); // Key for forcing re-render

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    setVideoKey((prevKey) => prevKey + 1); // Change key to force video reload
  };

  return (
    <section className="section-container"  id="vrHeadsets" >
      {/* Sub-Navigation for Switching Sections */}
      <nav className="sub-nav">
        {sectionsData.map((section) => (
          <button
            key={section.id}
            className={`sub-nav-btn ${
              activeSection === section.id ? "active" : ""
            }`}
            onClick={() => handleSectionChange(section.id)}
          >
            {section.title}
          </button>
        ))}
      </nav>

      {/* Sections Content */}
      <div className="sections-content">
        {sectionsData.map((section) => (
          <Section2x2
            key={section.id + videoKey} // Force re-render when section changes
            isActive={activeSection === section.id}
            section={section}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionData;
