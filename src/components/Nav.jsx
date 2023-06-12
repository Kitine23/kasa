import styles from './Nav.module.scss'
import { NavLink } from 'react-router-dom'

// https://reactrouter.com/en/main/components/nav-link#navlink
export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
