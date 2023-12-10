import { Nav, Wrapp } from 'components/AppLayout/StyledAppLayout';
import { NavLink, Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <Wrapp>
      <header>
        <nav>
          <Nav>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </Nav>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </Wrapp>
  );
};
