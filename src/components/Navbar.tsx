import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2>Finance Tracker</h2>
      <div className={styles.links}>
        <NavLink to="/"> Dashboard</NavLink>
        <NavLink to="/add"> Add Transaction</NavLink>
        <NavLink to="/history">History </NavLink>
        <NavLink to="/reports"> Reports</NavLink>
      </div>
    </nav>
  );
}