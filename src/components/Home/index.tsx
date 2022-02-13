/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import ImagemComponent from "../../shared/components/ImagemComponent";
import MenuComponent from "../../shared/components/Menu";
import PrimaryText from "../../shared/components/PrimaryText";
import SecondaryText from "../../shared/components/SecondaryText";
import {
  BkgComponent,
  ButtonContainer,
  ButtonContainerA,
  ImageContainer,
  LayoutContainer,
  MenuContainer,
  mySlidY,
  PrimaryTextContainer,
  SecondaryTextContainer
} from "./styled";

const Home: NextPage = () => {
  const [bkAnimation, setBkAnimation] = useState(
    "/images/background.jpg"
  );


  return (
    <LayoutContainer>
      <Head>
        <title>CSS Estudos</title>
        <meta property="og:title" content="MarketPlace" key="title" />
      </Head>
      <div style={{ position: "relative", width: "100%" }}>
        <BkgComponent imgObj={bkAnimation}>
          <MenuContainer css={css`animation: ${mySlidY} 5s linear infinite`}>
            <MenuComponent />
          </MenuContainer>

          <ImageContainer>
            <ImagemComponent />
          </ImageContainer>

          <PrimaryTextContainer>
            <PrimaryText />
          </PrimaryTextContainer>

          <SecondaryTextContainer>
            <SecondaryText />
          </SecondaryTextContainer>

          <ButtonContainerA>
            <Button>
              Saiba mais
            </Button>
          </ButtonContainerA>
        </BkgComponent>
      </div>
    </LayoutContainer>
  );
};

export default Home;
