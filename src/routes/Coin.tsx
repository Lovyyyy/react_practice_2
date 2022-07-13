import { useParams } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1``;

const Coin = () => {
  const { coinId } = useParams();

  return (
    <div>
      <Title>Coin : {coinId} </Title>
    </div>
  );
};

export default Coin;
