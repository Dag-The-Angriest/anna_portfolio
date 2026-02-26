function NavBar() {
  function handleClick() {
    const menu = document.querySelector(".mobile_menu");

    return (menu?.classList.toggle("is_open"), console.log(menu));
  }
  return (
    <nav className="navbar">
      <img
        className="navbar_icon"
        src="./assets/burger-menu.svg"
        alt="profile pic"
      />
      <p>PHOTO HANI</p>
      <button>
        <img
          onClick={handleClick}
          src="../src/assets/burger-menu.svg"
          alt="menu"
          className="mobile_nav_bar"
        />
      </button>
    </nav>
  );
}

export default NavBar;
