function MenuButton({ text, href }: { text: string; href: string }) {
  return (
    <li>
      <a href={href} className="menu_nav_button">
        {text}
      </a>
    </li>
  );
}

export default MenuButton;
