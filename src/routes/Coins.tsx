import styled from "styled-components";
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Container = styled.div``;

const Header = styled.div``;
const Coin = styled.h1``;
const CoinsList = styled.li``;

const coins = [
  {
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "hex-hex",
    name: "HEX",
    symbol: "HEX",
    rank: 3,
    is_new: false,
    is_active: true,
    type: "token",
  },
];

const Coins = () => {
  return (
    <Container>
      <Header>
        <Title> COINS </Title>;
      </Header>
      <CoinsList>
        {coins.map((coin) => (
          <Coin key={coin.id}> {coin.name} </Coin>
        ))}
      </CoinsList>
    </Container>
  );
};

export default Coins;
