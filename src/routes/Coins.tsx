import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api";
import { RouterInterface } from "./Router";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atom";

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Container = styled.div`
  padding: 0px 20px;
  min-width: 500px;
  max-width: 50vw;
  margin: auto;
  // 좌우 마진을 auto > 자동으로 동일하게 줘서 가운데 정렬을 유도
  // flex로 해도 될 듯
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.tabColor};
  color: ${(props) => props.theme.textColor};
  height: 40px;
  padding: 0 15px 0 15px;
  line-height: 40px;
  border-radius: 15px;
  margin-bottom: 10px;

  a {
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Icon = styled.img`
  max-height: 25px;
  margin-right: 10px;
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

// const Coins = ({ toModifiedTheme }: RouterInterface) => {
const Coins = () => {
  const { isLoading, data } = useQuery<CoinInterface[]>(["allCoins"], fetchCoins);
  const setIsDark = useSetRecoilState(isDarkAtom);
  console.log(data);

  /*
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [isloading, setIsLoading] = useState(false);
  const onLoadCoinData = () => {
    axios
      .get("https://api.coinpaprika.com/v1/coins")
      .then((res) => {
        setCoins(res.data.slice(0, 100));
        // 이미 받아 온 데이터에서 잘라내는게 아닌 잘라서 데이터를 가지고 올 순 없나?
        // API가 구현이 안되어있어서 그건 좀 힘드려나?
      })
      .catch((err) => console.log(err));
  };
  //  */
  // useEffect(() => {
  //   onLoadCoinData();
  //   setIsLoading(() => true);
  //   console.log(coins);
  // }, []);

  return (
    <Container>
      <Header>
        <Title> COINS </Title>
        <button onClick={() => setIsDark((prev) => !prev)}> Toggle </button>
      </Header>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <CoinsList>
          {data?.map((coin) => (
            <Coin key={coin.id}>
              <Link to={coin.id} state={coin}>
                <Icon
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
};

export default Coins;
