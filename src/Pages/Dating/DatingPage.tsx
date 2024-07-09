import React from "react";
import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./DatingPage.css";

const DatingPage: React.FC = () => {
  const [onScroll, SetOnScroll] = useState<string>("");

  window.onscroll = function () {
    SetOnScroll(window.pageYOffset > 0 ? "scroll-nav" : "");
  };
  return (
    <div>
      <Navbar onScroll={onScroll} />
      <form action="">
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsa
            sequi culpa dolorum possimus tempore laboriosam quod nemo, alias
            officiis adipisci iusto sapiente illo soluta porro aperiam, optio
            eaque ut!
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            voluptate incidunt eveniet praesentium! Fugiat doloremque atque
            magni ad voluptate! Consequuntur numquam at quis saepe blanditiis
            debitis impedit, adipisci ut eos.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quam
            repellat corrupti id expedita possimus vel, eius rerum voluptatem
            sed corporis vero maxime officiis magnam illum voluptas ullam
            voluptate ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quod
            ad tenetur rerum distinctio incidunt voluptates culpa, natus, fuga
            consectetur libero consequatur autem maiores at a! Ratione
            reprehenderit suscipit eum.
          </li>
        </ul>
      </form>
      <Footer />
    </div>
  );
};

export default DatingPage;
