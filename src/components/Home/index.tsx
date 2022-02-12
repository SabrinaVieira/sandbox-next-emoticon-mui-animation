/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { NextPage } from "next";
import Head from "next/head";
import BkgComponent from "../../shared/components/BkgComponent";
import CustomButton from "../../shared/components/CustomButton";
import ImagemComponentindex from "../../shared/components/ImagemComponent";
import MenuComponent from "../../shared/components/Menu";
import PrimaryTextindex from "../../shared/components/PrimaryText";
import SecondaryText from "../../shared/components/SecondaryText";
import { DivBlue, mySlidX, mySlidY } from "./styled";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MarketPlace | Fidúcia SCM</title>
        <meta property="og:title" content="MarketPlace" key="title" />
      </Head>
      <div style={{ position: "relative", width: "100%" }}>
        {/* <ImageImage src="./resources/banner2amarelo.png" css={css`
      animation: ${mySlid} 3s ease infinite;
    `}/> */}
        <BkgComponent>
          <MenuComponent
            css={css`
          animation: ${mySlidX} 5s ease infinite;
        `}
          />
          <ImagemComponentindex />
          <PrimaryTextindex />
          <SecondaryText />
          <CustomButton />
        </BkgComponent>
        <DivBlue
          css={css`
          animation: ${mySlidY} 5s linear infinite;
        `}
        />
      </div>
    </>
  );
};

export default Home;
