import classes from "./submenu.module.scss";

function SubMenu({ currentColor, onClick }) {
  const handleClick = function (e) {
    const btn = e.target;
    const type = btn.dataset.about;
    const btns = btn.closest("ul").querySelectorAll("button");

    btns.forEach((btn) => btn.classList.remove(classes.active));
    btn.classList.add(classes.active);

    onClick(type);
  };

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <button
            className={classes.active}
            data-about="overview"
            onClick={handleClick}
          >
            Overview
          </button>
        </li>
        <li>
          <button data-about="structure" onClick={handleClick}>
            Structure
          </button>
        </li>
        <li>
          <button data-about="surface" onClick={handleClick}>
            Surface
          </button>
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
