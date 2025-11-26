import { useSearch } from '../../context/SearchContext';

import './Navbar.css';

export default function Navbar() {
  const { term, setTerm } = useSearch();
  return (
    <nav className="navbar">
      <img
        src="https://placehold.co/120x40/007bff/ffffff?text=Vernon+Quan&font=roboto"
        alt="Logo"
      />
      <input
        className="navbar-search"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        type="text"
        placeholder="Search..."
        aria-label="Search"
      />
    </nav>
  );
}
