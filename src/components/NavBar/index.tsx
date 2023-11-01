import React, { useContext, useState } from "react";
import {
  ContainerButtons,
  ContainerIcons,
  ContainerNav,
  Content,
} from "./style";
import { Title, SubTitle } from "../Title/Index";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { SiGithub } from "react-icons/si";

import { light } from "../../styles/themes/light";
import { dark } from "../../styles/themes/dark";
import useDarkMode from "use-dark-mode";
import { EditContext } from "@/typescript/context/ThemeContext";
import Link from "next/link";
import { DefaultTheme } from "styled-components";
import { ThemeContext } from "styled-components";
const NavBar = () => {
  const darkMode = useDarkMode(false);
  console.log(darkMode.value);
  const [checked, setChecked] = useState(false);
  const { colors } = useContext<any>(ThemeContext);
  const [color, setColor] = useState<string>(colors.labelColor);
  function toogleColor(e: any) {
    if (color === colors.buttons) {
      setColor(colors.labelColor);
    } else {
      setColor(colors.buttons);
    }
    console.log(color);
  }
  const { setTheme } = useContext(EditContext);
  function toggleTheme() {
    if (darkMode.value === false) {
      setTheme(light);
      setChecked(false);
      darkMode.toggle();
    } else {
      setTheme(dark);
      setChecked(true);
      darkMode.toggle();
    }
  }

  return (
    <ContainerNav>
      <Content>
        <Title />
        <SubTitle />
      </Content>
      <ContainerButtons>
        <ContainerIcons onClick={toggleTheme}>
          <DarkModeSwitch
            checked={checked}
            size={20}
            onChange={toggleTheme}
            color="#A1A1AA"
            moonColor="#A1A1AA"
          />
        </ContainerIcons>
        <ContainerIcons onMouseEnter={toogleColor} onMouseLeave={toogleColor}>
          <Link
            href="https://github.com/Gabriel-Vict0r/ciphery"
            target="_blank"
          >
            <SiGithub
              size={20}
              color={color}
              style={{ transition: "all .2s ease-in-out" }}
            />
          </Link>
        </ContainerIcons>
      </ContainerButtons>
    </ContainerNav>
  );
};

export default NavBar;