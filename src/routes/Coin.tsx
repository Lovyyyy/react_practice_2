import axios from "axios";
import Price from "./Price";
import Chart from "./Chart ";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useMatch, useParams, Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinInfo, fetchCoinPrice } from "../api";

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;
const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
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
  margin: 20px 20px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 10px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) => (props.isActive ? props.theme.accentColor : props.theme.textColor)};
  a {
    display: block;
  }
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
  const { state } = useLocation() as LocationInterface;
  // API의 인터페이스를 만들고 state에 저장해주기

  // location 객체에서 state 값 구조분해?
  // 타입을 정해주는데 as 는 어떤 기능인지 파악하기
  // const [info, setInfo] = useState<InfoData>();
  // const [price, setPriceInfo] = useState<PriceData>();
  // const [loading, setLoading] = useState(false);

  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(["CoinInfo", coinId], () =>
    fetchCoinInfo(coinId)
  );
  const { isLoading: priceLoading, data: priceData } = useQuery<PriceData>(
    ["CoinPrice", coinId],
    () => fetchCoinPrice(coinId)
  );
  // 익명함수로 처리하는 이유
  // argument 의 사용을 하기 위해서 익명 함수를 불러서 해당 함수를 리턴시켜서 값을 불러오기
  // async , await 과 연결 되는 것 같음
  // 확인 필요
  const loading = infoLoading || priceLoading;

  // isLoading 메소드를 사용하나 두 쿼리 훅 모두 동일한 명칭을 사용하게 됨
  // 충돌을 방지하기 위해 각각의 메소드에 이름을 붙여주는건가?
  // isLoading : 내가원하는이름  =

  // const onLoadCoinInfo = () => {
  //   axios
  //     .get(`https://api.coinpaprika.com/v1/coins/${coinId}`)
  //     .then((res) => {
  //       console.log("info : ", res.data);
  //       setInfo(res.data);
  //       setLoading(true);
  //     })
  //     .catch((err) => console.log(err));
  // };
  // const onLoadCoinPrice = () => {
  //   axios
  //     .get(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
  //     .then((res) => {
  //       console.log("price :", res.data);
  //       setPriceInfo(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   onLoadCoinInfo();
  //   onLoadCoinPrice();
  // }, []);
  return (
    <Container>
      <Header>
        <Title>{state?.name ? state.name : infoData?.name}</Title>
      </Header>
      {loading ? (
        <Loader>L o a d i n g . . . </Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank : {infoData?.rank} </span>
            </OverviewItem>
            <OverviewItem>
              <span> Symbol : {infoData?.symbol} </span>
            </OverviewItem>
            <OverviewItem>
              <span> Open Source: {infoData?.open_source ? "Yes" : "No"} </span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{priceData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{priceData?.max_supply}</span>
            </OverviewItem>
          </Overview>
        </>
      )}

      <Tabs>
        <Tab isActive={priceMatch !== null}>
          <Link to={`/${coinId}/price`}>Price</Link>
        </Tab>
        <Tab isActive={chartMatch !== null}>
          <Link to={`/${coinId}/chart`}>Chart</Link>
        </Tab>
      </Tabs>
      <Outlet />
      {/* <Routes>
        <Route path={`/chart`} element={<Chart />} />
        <Route path={"/price"} element={<Price />} />
      </Routes> */}
    </Container>
  );
};

export default Coin;

/*

useMatch("params/url ")

Nested Route 
=> 라우트 내부의 라우트 
한 페이지 내부에서 탭별로 다른 화면을 렌더링 해줄때 
STATE로 상태관리를 통해서 렌더링 하는게 아니라, (Studylog 에서 내가 한게 이 방식 )
URL을 통해서 렌더링을 관리할 때 사용 할 수 있음 
URL로 하는게 더 좋은 이유는 이전 페이지에 접속해서 탭을 선택하는게 아닌
URL 을 통해서 원하는 페이지로 직접 연결을 할 수 있다.
실제로 studylog 에서는 todos 페이지 이후 탭을 선택해야 각 투두 / 차트를 볼 수 있음 
차트를 바로 보거나 todos를 바로 보거나 할 수는 없음 
 사용 방법
 1. 상위 Route  내부에  Route를 추가로 만들어주기
 2. Outlet으로 렌더링하기 

 Outlet 으로 렌더링 하길 원치 않는다면 

 1. 상위 컴포넌트 내부에 
      <Routes>
        <Route path={`/chart`} element={<Chart />} />
        <Route path={"/price"} element={<Price />} />
      </Routes>
  처럼 하위 라우터를 만들어서 넣기 

https://reactrouter.com/docs/en/v6/getting-started/overview#nested-routes




*/
