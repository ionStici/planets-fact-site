import classes from "./submenu.module.scss";
import { useEffect, useState } from "react";

function SubMenu({ currentColor, onClick }) {
  const handleClick = function (e) {
    const btn = e.target;
    const btns = btn.closest("ul").querySelectorAll("button");

    btns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");

    onClick(btn.dataset.about);
  };

  const [match, setMatch] = useState();
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setMatch(mediaQuery.matches);

    const handler = (e) => setMatch(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <button
            className="active"
            data-about="overview"
            onClick={handleClick}
          >
            {match && <span>01</span>}
            Overview
          </button>
        </li>
        <li>
          <button data-about="structure" onClick={handleClick}>
            {match && <span>02</span>}
            {match && "Internal"} Structure
          </button>
        </li>
        <li>
          <button data-about="surface" onClick={handleClick}>
            {match && <span>03</span>}
            Surface {match && "Geology"}
          </button>
        </li>
      </ul>

      <style jsx>{`
        button::after {
          background-color: ${currentColor};
        }

        .active {
          opacity: 1;
        }

        .active::after {
          content: "";
          width: 100%;
          height: 4px;

          position: absolute;
          left: 0;
          bottom: 0;
        }

        @media only screen and (min-width: 768px) {
          button::after {
            background-color: revert;
          }

          .active::after {
            display: none;
          }

          .active {
            background-color: ${currentColor};
            border-color: ${currentColor};
          }

          .active:hover {
            background-color: ${currentColor};
            border-color: ${currentColor};
          }
        }
      `}</style>
    </nav>
  );
}

export default SubMenu;
