import { Link } from "react-router-dom";

import './SideMenu.css';

export default function SideMenu() {
  return (
    <nav className="side-menu">
      <Link to ="/" className="link">App</Link>
      <Link to ="/documents" className="link">Documents</Link>
    </nav>
  );
}