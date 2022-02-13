import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import globalTheme from "../../styles/globalTheme";

interface IBkgContainer {
  imgObj: string;
}

export const BkgComponent = styled.div<IBkgContainer>`
  width: 100%;
  height: 900px;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center start;
  align-items: center;

  background-image: url(${(props) => props.imgObj});
  background-color: ${globalTheme.colors.pinkColor100};
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;

  color: ${globalTheme.colors.whiteColor100};
`
export const MenuContainer = styled.div`
  width: calc(100% - 3rem);
  height: 8.5rem;
  position: absolute;
  bottom:0;
  top: 2rem;
  background-color: blue;
`

export const ImageContainer = styled.div`
  width: 52.5rem;
  height: 48.75rem;
  position: absolute;
  top: 2rem;
`;

export const PrimaryTextContainer = styled.div`
  width: 35rem;
  position: absolute;
  top: 2rem;
`;

export const SecondaryTextContainer = styled.div`
  width: 25.5rem;
  height: 5rem;
  position: absolute;
  top: 10rem;
`;

export const ButtonContainerA = styled.div`
  width: 12rem;
  height: 3rem;
  position: relative;
  top: 10rem;
`;

export const mySlidMenu = keyframes`
   from, 0% to {
    right: 0;
    opacity:1;
  background-color: red;
  }
  80% {
    transform: translateX(1000px);
    opacity:1;
  }
  100% {
    transform: translateX(-400px);
    opacity:0;
  background-color: blue;
  }
}`





export const LayoutContainer = styled.div`
width: 100%;
overflow: hidden;
display: grid;
grid-template-columns: 1fr;

justify-items: center;
align-items: center;
`

export const mySlidY = keyframes`
   from, 0% to {
    transform: translateY(0px);
    top: 0;
    opacity: 0;
  }
  10% {
    opacity:1;
  }
  60%, 80% {
    transform: translateY(400px);
    opacity:1;
  }
  100% {
    transform: translateY(375px);
    opacity:0;
  }
}`
