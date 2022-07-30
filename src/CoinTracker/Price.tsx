import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useContext, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
// import { fetchExrate } from "../api";
import { useCoinData } from "./Coin";
import { PriceData } from "./Coin";

const KEY = process.env.REACT_APP_KEY;
//  왜 env가 작동이 안될까?
const EX_URL = "https://www.koreaexim.go.kr/site/program/financial/exchangeJSON";

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

  // const { isLoading, data: exRateData } = useQuery(["환율"], fetchExrate);
  // console.log(exRateData);

  // const fetchExRate = async () => {
  //   return await axios
  //     .get(
  //       `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=IlSb9B7qtD2Z8U0BSRztU7Hsewl9yBPT&searchdate=20220727&data=AP01`,
  //       {
  //         headers: {
  //           Accept: "*",
  //           "Access-Control-Allow-Headers": "*",
  //           "Access-Control-Allow-Origin": "*",
  //         },
  //       }
  //     )
  //     .then((res) => res.data);
  // };

  useEffect(() => {
    // fetchExRate();
    // fetch(
    //   "https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=IlSb9B7qtD2Z8U0BSRztU7Hsewl9yBPT&searchdate=20220727&data=AP01",
    //   {
    //     headers: {
    //       Accept: "*",
    //       "Access-Control-Allow-Headers": "*",
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
    // axios
    //   .get(
    //     `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=IlSb9B7qtD2Z8U0BSRztU7Hsewl9yBPT&data=AP01`,
    //     {
    //       headers: {
    //         "Access-Control-Allow-Origin": "*",
    //       },
    //     }
    //   )
    //   .then((res: AxiosResponse) => console.log(res))
    //   .catch((err: AxiosError) => console.log(err));
  }, []);

  // 환율 데이터를 왜 못 불러오는지 모르겠다 음 ~~~!!!!

  return (
    <div>
      <div> PRICE </div>
      {/* <Tab>RANK : {data.rank}</Tab>

      <Tab> USD : {data.quotes.USD.price.toFixed(3)} $</Tab> */}
    </div>
  );
};

export default Price;
