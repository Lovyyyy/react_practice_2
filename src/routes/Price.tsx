import { useContext } from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { useCoinData } from "./Coin";
import { PriceData } from "./Coin";
const Tab = styled.div`
  width: 200px;
  height: 50px;
  background-color: rgba(160, 240, 193, 0.5);
  display: inline-block;
  margin: 10px;
  padding: 10px;
  text-align: center;
  color: ${(props) => props.theme.accentColor};
`;

const Price = () => {
  const { data } = useCoinData();

  return (
    <div>
      <div> PRICE </div>
      <Tab>RANK : {data.rank}</Tab>

      <Tab> USD : {data.quotes.USD.price.toFixed(3)} $</Tab>
      {}
    </div>
  );
};

export default Price;
