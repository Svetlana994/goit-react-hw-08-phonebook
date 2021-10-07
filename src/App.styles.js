import styled from "@emotion/styled/macro";

export const Container = styled.div`
  padding: 50px;
`;

export const FormTitle = styled.h3`
  text-align: center;
`;

export const Block = styled.div`
  width: 450px;
  height: auto;
  margin: 0 auto;
  text-align: center;
  color: #ffffff;
  padding: 81px 30px;
  font-size: 16px;
  border-radius: 9px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 4px;
    background: linear-gradient(
      60deg,
      #f79533,
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82
    );
    z-index: -1;
    animation: blockanimate 3s ease alternate infinite;
    background-size: 300% 300%;
    clip-path: polygon(
      0% 100%,
      3px 100%,
      3px 3px,
      calc(100% - 3px) 3px,
      calc(100% - 3px) calc(100% - 3px),
      3px calc(100% - 3px),
      3px 100%,
      100% 100%,
      100% 0%,
      0% 0%
    );
  }
  @keyframes blockanimate {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
