import styles from "./Header.module.css";

import coffeeLogo from "../assets/coffee.svg";
import codeLogo from "../assets/code.svg";
import linuxLogo from "../assets/linux-logo.svg";
import robotLogo from "../assets/robot.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={coffeeLogo} alt="logotipo do coffee" />

      <ul className={styles.navbar}>
        <li>
            
          <a href="#">
          <img src={robotLogo} alt="logotipo do coffee" />
          About Me</a>
        </li>
        <li>
          <a href="#">
          <img src={codeLogo} alt="logotipo do coffee" />
            Projects</a>
        </li>
        <li>
          <a href="#">
          <img src={linuxLogo} alt="logotipo do coffee" />
          Contact Me</a>
        </li>
      </ul>
    </header>
  );
}
