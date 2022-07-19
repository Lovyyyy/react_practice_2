import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;

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

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
  // tags : object;
  // team : object;
  // links : object;
  // links_extended : object;
  // whitepaper : object;
}
/*

Api등 웹 서버에서 전달 되는 데이터를 쉽고 간편하게 복사해서 인터페이스를 정의 하는 방법 
1. 콘솔창에 해당 데이터를 출력 시킨다.
2. 콘솔에 출력 된 데이터를 우클릭 하여 전역 변수로 저장시킨다 
(store object as global variation )

3. 저장 된 객체의 키값만 추출하고 문자열로 변경한다.
Object.keys(temp1.data).join()
4. 객체의 값에 대해서도 동일하게 처리하되 타입을 받아내고 문자열로 변경시킨다.
Object.values(temp1.data).map(data => typeof data).join()
5. 변경 된 문자열의 ,큰 컨트롤 + D 를 통해서 선택적 제거를 해주자 
6. 인터페이스 객체 내에 붙여 넣는다. 
 붙여 넣을때는 알트 + 쉬프트 + I 를 통해서 각 키에 밸류를 한번에 넣을 수 있다. 

*/

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const Coin = () => {
  const { coinId } = useParams();
  const [info, setInfo] = useState<InfoData>();
  const [price, setPriceInfo] = useState<PriceData>();
  // API의 인터페이스를 만들고 state에 저장해주기

  const { state } = useLocation() as LocationInterface;
  // location 객체에서 state 값 구조분해?
  //  타입값ㅇ르 정해주는데 as 는 어떤 기능인지 파악하기

  //api.coinpaprika.com/v1/coins/btc-bitcoin
  //api.coinpaprika.com/#operation/getCoinById

  const onLoadCoinInfo = () => {
    axios
      .get(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      .then((res) => {
        console.log("info : ", res.data);
        setInfo(res.data);
      })
      .catch((err) => console.log(err));
  };
  const onLoadCoinPrice = () => {
    axios
      .get(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      .then((res) => {
        console.log("price :", res.data);
        setPriceInfo(res.data);
      })
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
