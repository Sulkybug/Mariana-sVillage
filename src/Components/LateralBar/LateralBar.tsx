import React from "react";
import { FaWhatsapp, FaEnvelope, FaFacebook, FaYoutube } from "react-icons/fa";
import "./LateralBar.css";

const LateralBar: React.FC = () => {
  return (
    <div>
      <section className="buttonsBar">
        <a
          href="https://www.facebook.com/profile.php?id=61558536885530"
          target="_blank"
          className="facebook"
        >
          <FaFacebook />
        </a>

        <a
          href="https://github.com/Sulkybug"
          target="_blank"
          className="youtube"
        >
          <FaYoutube />
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=573152637167"
          className="whatsapp"
          target="_blank"
        >
          <FaWhatsapp />
        </a>

        <a
          href="mailto:feang_c0@hotmail.com"
          className="whatsapp"
          target="_blank"
        >
          <FaEnvelope />
        </a>
      </section>
    </div>
  );
};

export default LateralBar;
