import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export const SingleView = () => {
  const { type, uid } = useParams();
  const [element, setElement] = useState({});

  const fetchElement = async () => {
    const response = await fetch(`https://www.swapi.tech/api/${type}/${uid}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setElement(data.result.properties);
  };

  useEffect(() => {
    fetchElement();
  }, [type, uid]);

  return (
    <div className="container text-center text-light">
      <h1 className="mt-4">
        <strong>{element.name}</strong>
      </h1>
      <div className="row mt-5">
        <div className="my-auto col text-start">
          {Object.entries(element)
            .filter(
              ([key]) =>
                key !== "name" &&
                key !== "created" &&
                key !== "edited" &&
                key != "url" &&
                key != "people" &&
                key != "pilots" &&
                key != "films" &&
                key != "homeworld"
            )
            .map(([key, value]) => (
              <div key={key} className="mb-2">
                <h3>
                  <strong>{key}:</strong> {String(value)}
                </h3>
              </div>
            ))}
        </div>
        <div className="col">
          <img
            src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/${type}/${uid}.jpg?raw=true`}
            className="card-img-top"
            alt={`No image found for ${element.name}`}
          />
        </div>
      </div>
    </div>
  );
};
