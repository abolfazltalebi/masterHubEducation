import { Link } from "react-router-dom";
import { navbarItem } from "../../../constants/NavbarItem";

export default function HeaderMenu() {
  return (
    <div className="hidden md:inline">
      <ul className="flex items-center gap-4">
        {navbarItem.map((Nitem) => {
          return (
            <li key={Nitem.id} className="transition-all hover:-translate-y-1">
              <Link to={Nitem.link}>{Nitem.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
