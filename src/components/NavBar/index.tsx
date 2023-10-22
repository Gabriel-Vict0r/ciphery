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
const NavBar = () => {
  const darkMode = useDarkMode(false);
  console.log(darkMode.value);
  const [checked, setChecked] = useState(false);
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
        <ContainerIcons>
          <DarkModeSwitch
            checked={checked}
            size={20}
            onChange={toggleTheme}
            color="#A1A1AA"
            moonColor="#A1A1AA"
          />
        </ContainerIcons>
        <ContainerIcons>
          <SiGithub size={20} color="#A1A1AA" />
        </ContainerIcons>
      </ContainerButtons>
    </ContainerNav>
  );
};

export default NavBar;
