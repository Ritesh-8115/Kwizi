import React from "react";

function quizCatelog({ image, heading, description }) {
  return (
    <>
      <a href="/" style={{ textDecoration: "none", }}>
        <div
          class="card"
          style={{
            width: "18rem",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            padding: "10px",
            borderRadius: "8px",
            height:"35vh",
            overflow:"hidden"
          }}
        >
          <img
            src={image}
            class="card-img-top"
            alt="image unavailable"
            style={{ width: "50%", marginLeft: "20%" }}
          />
          <div class="card-body">
            <h5 class="card-title">{heading}</h5>
            <p class="card-text">{description}</p>
          </div>
        </div>
      </a>
    </>
  );
}

export default quizCatelog;
