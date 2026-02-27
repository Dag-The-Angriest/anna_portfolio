import MenuButton from "./MenuButton";

function MobileMenu() {
  function handleClick(e) {
    const menu = document.querySelector(".mobile_nav_bar");
    const arrow = document.querySelector(".mobile_nav_arrow");
    const portfo = document.querySelector("li")?.firstChild;
    const mobPortfo = document.querySelector(".mobile_portfolio_menu");
    if (e.target !== portfo) {
      return;
    }
    return (
      mobPortfo.classList.toggle("is_open"),
      menu?.classList.toggle("invis"),
      arrow.classList.toggle("invis")
    );
    // return console.log(mobPortfo);
  }
  return (
    <ul className="mobile_menu " onClick={handleClick}>
      <MenuButton text={"PORTFOLIO"} href={"#"} />
      <MenuButton text={"WSPÓŁPRACA"} href={"#"} />
      <MenuButton text={"WYKSZTAŁCENIE"} href={"#"} />
      <MenuButton text={"KONTAKT"} href={"#"} />
    </ul>
  );
}

export default MobileMenu;
