import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">

      <Link to="/">Home</Link>

      <Link to="/mood">Mood</Link>

      <Link to="/quotes">Quotes</Link>

      <Link to="/tips">Tips</Link>

    </div>
  );
}

export default Navbar;