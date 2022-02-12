import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import globalTheme from "../../../styles/globalTheme";
import { mediaQuerieMaxnFunc } from "../../../styles/themeMui";

// exemplo 3d
// export const mySlid = keyframes`
//    from, 20%, 53%, 80%, to {
//     transform: translate3d(0,0,0);
//   }
//   40%, 43% {
//     transform: translate3d(0, -30px, 0);
//   }
//   70% {
//     transform: translate3d(0, -15px, 0);
//   }
//   90% {
//     transform: translate3d(0,-4px,0);
//   }
// }`;

export const mySlidX = keyframes`
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
}`;

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