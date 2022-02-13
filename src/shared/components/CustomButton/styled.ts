import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

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
}`;

export const DivBox = styled.div`
  width: 100px;
  height: 100px;
`;

/* The element to apply the animation to */
export const DivRed = styled(DivBox)`
  position: absolute;
  background-color: red;
`;

export const DivBlue = styled(DivBox)`
  position: absolute;
  margin-right: 40%;
  right: 0;
  top: 80px;
  background-color: blue;
`;

export const ImageImage = styled.img`
  width: 52.5rem;
  height: 48.75rem;
  position: relative;
`;

/* const hotpink = css({
  color: 'hotpink'
}) */