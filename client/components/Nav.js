import Link from "next/link";

const Nav = () => {
  return (
    <nav
      className="nav justify-content-between d-flex"
      style={{ backgroundColor: "black" }}
    >
      <li className="nav-item">
        <Link href="/">
          <a className="nav-link text-light">Home</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/login">
          <a className="nav-link text-light">Login</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/register">
          <a className="nav-link text-light">Register</a>
        </Link>
      </li>
    </nav>
  );
};

export default Nav;
