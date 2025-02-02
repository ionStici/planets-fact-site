import { views } from "@/constants/views";
import classes from "@/styles/submenu.module.scss";
import { Planet } from "@/types/planet";
import Link from "next/link";

type SubMenuProps = { planetData: Planet; view: string };

function SubMenu({ planetData, view }: SubMenuProps) {
  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        {views.map((v, i) => {
          const activeLink = view === v ? { opacity: 1, borderColor: "transparent" } : {};
          const bgColor = view === v ? { backgroundColor: planetData.navColor } : {};

          return (
            <li key={i} className={classes.li}>
              <Link href={`/${planetData.name.toLowerCase()}/${v}`} style={activeLink}>
                <div className={classes.mask} style={bgColor} />
                <span className={classes.num}>0{i + 1}</span>
                {v === "overview" && <span className={classes.text}>Overview</span>}
                {v === "structure" && (
                  <span className={classes.text}>
                    <span className={classes.text_hide}>Internal </span> Structure
                  </span>
                )}
                {v === "surface" && (
                  <span className={classes.text}>
                    Surface <span className={classes.text_hide}> Geology</span>
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SubMenu;
