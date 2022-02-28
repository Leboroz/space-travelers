import icon from '../images/planet.png';
import { NavLink } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header>
      <figure>
        <img src={icon} alt="planet" />
      </figure>
      <h1>Space Traveler's Hub</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Rockets</NavLink>
          </li>
          <hr />
          <li>
            <NavLink to="/missions">Missions</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
