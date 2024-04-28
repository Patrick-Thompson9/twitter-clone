const NavLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Settings", path: "/settings" },
  { title: "Contact", path: "/contact" },
];

function Navbar() {
  return (
    <nav>
      <ul>
        {NavLinks.map((link, index) => (
          <li key={link.title}>
            <a href={link.path}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
