import React from "react";
import { AppLogo, LogoLink } from "../Navbar";
import { Body, Container } from "../Styled/Commons";
import { FooterContainer, FooterContentContainer } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterContentContainer>
          <LogoLink to="/">
            <AppLogo>AnimeSenpai</AppLogo>
          </LogoLink>
          <Body>
            This app was created using ANIAPI and JIKAN API(Unofficial
            MyAnimeList API).
          </Body>
          <Body>Inspired from 9anime.to.</Body>
        </FooterContentContainer>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
