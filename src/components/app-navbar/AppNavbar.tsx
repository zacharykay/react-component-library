import { FC } from "react";
import NavItem from "./NavItem";
import { ReactComponent as Filters } from "../../icons/filters.svg";
import { ReactComponent as Bookmark } from "../../icons/bookmark.svg";
import { ReactComponent as Download } from "../../icons/download.svg";
import { ReactComponent as Dots } from "../../icons/dots-circle.svg";

import "./navbar.scss";
import DropdownMenu from "./DropdownMenu";
// import DropdownMenuOld from "./DropdownMenuOld";

const AppNavbar: FC = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavItem icon={<Filters />} />
        <NavItem icon={<Bookmark />} />
        <NavItem icon={<Download />} />
        <NavItem icon={<Dots />}>
          <DropdownMenu />
        </NavItem>
      </ul>
    </nav>
  );
};

export default AppNavbar;
