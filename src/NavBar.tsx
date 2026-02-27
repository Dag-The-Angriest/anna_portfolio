function NavBar() {
  function handleClick() {
    const menu = document.querySelector(".mobile_menu");

    return menu?.classList.toggle("is_open");
  }
  function handleClick1() {
    const menu = document.querySelector(".mobile_nav_bar");
    const arrow = document.querySelector(".mobile_nav_arrow");
    const mobPortfo = document.querySelector(".mobile_portfolio_menu");

    return (
      menu?.classList.toggle("invis"),
      arrow?.classList.toggle("invis"),
      mobPortfo.classList.toggle("is_open")
    );
  }

  return (
    <nav className="navbar">
      <img
        className="navbar_icon"
        src="./assets/burger-menu.svg"
        alt="profile pic"
      />
      <p>PHOTO HANI</p>

      <img
        onClick={handleClick}
        src="../src/assets/burger-menu.svg"
        alt="menu"
        className="mobile_nav_bar"
      />
      <img
        onClick={handleClick1}
        src="../src/assets/arrow_back.svg"
        alt="back arrow"
        className="mobile_nav_arrow invis"
      />
    </nav>
  );
}

export default NavBar;
