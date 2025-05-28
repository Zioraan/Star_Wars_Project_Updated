import { Link } from "react-router-dom";
import { Favorite } from "./Favorite";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
  const { store } = useGlobalReducer();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="text-decoration-none text-white navbar-brand">
          Star Wars Blog
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites
              </div>
              <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                <li>People</li>
                {store.favorites.people.map((element) => (
                  <li key={`favorite-people-${element.uid}`}>
                    <Favorite element={element} type="people" />
                  </li>
                ))}
                <li>Planets</li>
                {store.favorites.planets.map((element) => (
                  <li key={`favorite-planets-${element.uid}`}>
                    <Favorite element={element} type="planets" />
                  </li>
                ))}
                <li>Vehicles</li>
                {store.favorites.vehicles.map((element) => (
                  <li key={`favorite-vehicles-${element.uid}`}>
                    <Favorite element={element} type="vehicles" />
                  </li>
                ))}
                <li>Species</li>
                {store.favorites.species.map((element) => (
                  <li key={`favorite-species-${element.uid}`}>
                    <Favorite element={element} type="species" />
                  </li>
                ))}
                <li>Starships</li>
                {store.favorites.starships.map((element) => (
                  <li key={`favorite-starships-${element.uid}`}>
                    <Favorite element={element} type="starships" />
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
