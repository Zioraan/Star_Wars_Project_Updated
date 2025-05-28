import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { object } from "prop-types";

export const Card = ({ element, type }) => {
  const { store, dispatch } = useGlobalReducer();

  let traits = {};

  if (type === "people") {
    traits = {
      hair_color: element.properties.hair_color,
      eye_color: element.properties.eye_color,
    };
  }

  if (type === "planets") {
    traits = {
      climate: element.properties.climate,
      terrain: element.properties.terrain,
    };
  }

  if (type === "vehicles") {
    traits = {
      model: element.properties.model,
      manufacturer: element.properties.manufacturer,
    };
  }
  if (type === "species") {
    traits = {
      classification: element.properties.classification,
      designation: element.properties.designation,
    };
  }
  if (type === "starships") {
    traits = {
      model: element.properties.model,
      crew: element.properties.crew,
    };
  }

  return (
    <div
      className="card text-light bg-dark d-flex flex-column"
      style={{ width: "18rem" }}
    >
      <h2 className="card-title mt-3">{element.properties.name}</h2>
      <img
        src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/${type}/${element.uid}.jpg?raw=true`}
        className="card-img mt-2"
        alt={`No image found for ${element.properties.name}`}
      />
      <div
        className="card-body text-start d-flex flex-column"
        style={{ flex: 1, minHeight: 0 }}
      >
        <div style={{ flex: 1 }}>
          {Object.entries(traits).map(([key, value]) => (
            <div key={key} className="mb-2">
              <strong>{key}:</strong> {String(value)}
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between mt-auto pt-3">
          <Link to={`/${type}/${element.uid}`} className="btn btn-primary">
            See more
          </Link>
          {store.favorites[type].some(
            (favElement) => favElement.uid === element.uid
          ) ? (
            <button
              className="btn btn-danger"
              onClick={() =>
                dispatch({
                  type: "toggle_favorite",
                  payload: { type: type, element },
                })
              }
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          ) : (
            <button
              className="btn btn-warning"
              onClick={() =>
                dispatch({
                  type: "toggle_favorite",
                  payload: { type: type, element },
                })
              }
            >
              <FontAwesomeIcon icon={faStar} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
