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
import { AuthProvider } from "@/typescript/context/ThemeContext";
import { EditContext } from "../../context/ThemeContext";
import { light } from "../../styles/themes/light";
import { dark } from "../../styles/themes/dark";
const NavBar = () => {
  const { theme, setTheme } = useContext(EditContext);
  const [checkedBtn, setCheckedBtn] = useState(true);
  function switchTheme() {
    if (theme.title === "light") {
      setTheme(dark);
      setCheckedBtn(true);
    } else {
      setCheckedBtn(false);
      setTheme(light);
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
            checked={checkedBtn}
            size={20}
            onChange={switchTheme}
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
