import MenuButton from "./MenuButton";

function MobileMenu() {
  return (
    <div className="mobile_menu ">
      <a href="" className="menu_nav_button">
        <p>PORTFOLIO</p>
      </a>
      <a href="" className="menu_nav_button">
        <p>WSPÓŁPRACA</p>
      </a>
      <a href="" className="menu_nav_button">
        <p>WYKSZTAŁCENIE</p>
      </a>
      <a href="" className="menu_nav_button">
        <p>KONTAKT</p>
      </a>
      <MenuButton text={"hello"} />
    </div>
  );
}

export default MobileMenu;
