import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      Hosted with{" "}
      <a
        href="https://www.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Netlify
      </a>
      <br />
      Open-source{" "}
      <a
        href="https://github.com/Stajgar/my-react-weather-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        code
      </a>
      , by{" "}
      <a
        href="https://www.linkedin.com/in/agnieszkaskupinska/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Agnieszka Skupińska <i className="fab fa-linkedin"></i>
      </a>
    </div>
  );
}
