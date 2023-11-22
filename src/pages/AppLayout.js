import { NavLink, Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
            <Outlet />
          </ul>
        </nav>
      </header>
    </div>
  );
};
