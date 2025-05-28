import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const Card = ({ element, type }) => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="card text-light bg-dark" style={{ width: "18rem" }}>
      <h5 className="card-title">{element.name}</h5>
      <img
        src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/${type}/${element.uid}.jpg?raw=true`}
        className="card-img-top"
        alt={`No image found for ${element.name}`}
      />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <Link to={`/${type}/${element.uid}`} className="btn btn-primary">
            See more
          </Link>
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
        </div>
      </div>
    </div>
  );
};
