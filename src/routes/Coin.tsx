import axios from "axios";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

interface LocationInterface {
  state: {
    id: string;
    is_active: boolean;
    is_new: boolean;
    name: string;
    rank: number;
    symbol: string;
    type: string;
  };
}

const Coin = () => {
  const { coinId } = useParams();

  const { state } = useLocation() as LocationInterface;
  // location 객체에서 state 값 구조분해?

  //api.coinpaprika.com/v1/coins/btc-bitcoin
  //api.coinpaprika.com/#operation/getCoinById

  const onLoadCoinInfo = () => {
    axios
      .get(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      .then((res) => console.log("info :", res))
      .catch((err) => console.log(err));
  };
  const onLoadCoinPrice = () => {
    axios
      .get(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      .then((res) => console.log("price :", res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    onLoadCoinInfo();
    onLoadCoinPrice();
  }, []);
  return (
    <div>
      <div>Coin : {state.name}</div>
    </div>
  );
};

export default Coin;
