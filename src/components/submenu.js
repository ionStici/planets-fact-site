import classes from "./submenu.module.scss";

function SubMenu({ currentColor }) {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <button className={classes.active} data-about="overview">
            Overview
          </button>
        </li>
        <li>
          <button data-about="structure">Structure</button>
        </li>
        <li>
          <button data-about="surface">Surface</button>
        </li>
      </ul>

      <style jsx>{`
        button::after {
          background-color: ${currentColor};
        }
      `}</style>
    </nav>
  );
}

export default SubMenu;
