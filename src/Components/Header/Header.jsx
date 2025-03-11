import React from "react";
import VideoBackground from "./VideoBackground";

const Header = ({ id }) => {
  return (
    <section id={id} className="header">
      <VideoBackground />
    </section>
  );
};

export default Header;
