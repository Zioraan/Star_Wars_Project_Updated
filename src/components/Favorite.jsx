import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Favorite = ({ element, type }) => {
  const { dispatch } = useGlobalReducer();
  return (
    <div className="d-flex justify-content-between">
      <Link to={`/${type}/${element.uid}`}>
        <span className="text-decoration-none text-white">
          {element.properties.name}
        </span>
      </Link>
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
    </div>
  );
};
