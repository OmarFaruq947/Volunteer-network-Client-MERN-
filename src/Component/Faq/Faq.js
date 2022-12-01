import React, { useEffect, useState } from "react";
import logo from "../img/logos/logo.png";
import "./Faq.css";
import FaqChilde from "./FaqChilde";

const Faq = () => {
  const [faqS, setFaqS] = useState([]);

  useEffect(() => {
    fetch("https://volunteer-network-by-omar.onrender.com/faq")
      .then((res) => res.json())
      .then((data) => setFaqS(data));
  }, []);

  return (
    <div>
      <div className="login-img_FAQ">
        <img src={logo} alt="" />
        <p className="authentication_title_FAQ">Volunteer FAQ</p>
      </div>
      {faqS.map((faq) => (
        <FaqChilde key={faq._id} faq={faq} />
      ))}
    </div>
  );
};

export default Faq;
