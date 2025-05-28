import React from "react";
import { Card } from "./Card";

// Helper function to chunk the array
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

export const Carousel = ({ array, type, cardsPerSlide = 4 }) => {
  const slides = chunkArray(array || [], cardsPerSlide);

  return (
    <div
      id={type + "Carousel"}
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner container d-flex">
        {slides.map((slide, slideIdx) => (
          <div
            className={`carousel-item ${slideIdx === 0 ? "active" : ""}`}
            key={`slide-${slideIdx}`}
          >
            <div className="d-flex justify-content-center gap-3">
              {slide.map(
                (element) => (
                  console.log("element", element),
                  (
                    <Card
                      element={element}
                      type={type}
                      key={type + element.uid}
                    />
                  )
                )
              )}
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={"#" + type + "Carousel"}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={"#" + type + "Carousel"}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
