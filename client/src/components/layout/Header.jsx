import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        padding: "16px 24px",
        backgroundColor: "#111827",
        color: "#f9fafb",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>BlogSphere</h1>

      <nav style={{ display: "flex", gap: "16px" }}>
        <Link to="/" style={{ color: "#e5e7eb", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/login" style={{ color: "#e5e7eb", textDecoration: "none" }}>
          Login
        </Link>
        <Link
          to="/register"
          style={{ color: "#e5e7eb", textDecoration: "none" }}
        >
          Register
        </Link>
      </nav>
    </header>
  );
}

export default Header;
