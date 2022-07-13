import styled from "styled-components";
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Coins = () => {
  return <Title> COINS </Title>;
};

export default Coins;
