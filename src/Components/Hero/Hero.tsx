import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <div id="hero">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Czgye6BfMN4?&start=25&amp;end=300;controls=0&autoplay=1&mute=1&playsinline=1&playlist=Czgye6BfMN4&loop=1&amp;start=10"
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture; web-share; fullscreen"
      ></iframe>
      <div className="content">
        <img className="LogoCompany" src="/img/LogoMarianas.png" alt="" />
        <div className="buttonsArea">
          <button className="heroButton">― Our Products ―</button>
          <button className="heroButton">― Invest with us ―</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
