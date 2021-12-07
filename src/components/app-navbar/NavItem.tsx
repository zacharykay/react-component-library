import { FC, ReactElement, useState } from "react";

import "./navbar.scss";

interface Props {
  icon?: string | number | ReactElement;
}

const NavItem: FC<Props> = ({ icon, children }) => {
  const [ open, setOpen ] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {icon}
      </a>

      {open && children}
    </li>
  );
};

export default NavItem;
