import React from "react";

const Footer = () => {
  return (
    <div className="alert bg-dark text-danger fw-bold text-end mt-5 d-flex justify-content-between align-items-center bg-darkmode">
      <h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="bi bi-camera-reels-fill me-3"
          viewBox="0 0 16 16"
          styles="color: #f08c00"
        >
          <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7z" />
        </svg>
        Movies App
      </h2>
      <h5>Copyright © 2023 by &lt; Tuấn Khanh &gt;</h5>
    </div>
  );
};

export default Footer;
