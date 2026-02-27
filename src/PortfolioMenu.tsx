import MenuButton from "./MenuButton";

function PortfolioMenu() {
  return (
    <ul className="mobile_portfolio_menu ">
      <MenuButton text={"SESJE PORTRETOWE"} href={"#"} />
      <MenuButton text={"SESJE FIRMOWE"} href={"#"} />
      <MenuButton text={"FINE ART"} href={"#"} />
      <MenuButton text={"SESJE RODZINNE"} href={"#"} />
      <MenuButton text={"FOTO-AWATARY"} href={"#"} />
      <MenuButton text={"LOVE STORY"} href={"#"} />
      <MenuButton text={"OKŁADKI PŁYT"} href={"#"} />
      <MenuButton text={"MOJA ESTETYKA"} href={"#"} />
    </ul>
  );
}

export default PortfolioMenu;
