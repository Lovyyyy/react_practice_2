import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useCoinId } from "./Coin";

const Chart = () => {
  // const coinId = useOutletContext();
  const { coinId } = useCoinId();
  console.log(coinId);
  const { isLoading, data } = useQuery(["coinHistory", coinId], () => fetchCoinHistory(coinId));

  console.log(data);
  // useEffect(() => {
  //   const endDate = Math.floor(Date.now() / 1000);
  //   const startDate = endDate - 60 * 60 * 23;
  //   axios
  //     .get(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`)
  //     .then((res: AxiosResponse) => console.log("nico data :", res.data))
  //     .catch((err: AxiosError) => console.log(err.response?.data));

  //   axios
  //     .get(
  //       `https://api.coinpaprika.com/v1/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  //     )
  //     .then((res) => console.log("paprica : ", res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div>
      <div> CHART </div>
    </div>
  );
};

export default Chart;

/*


CHART 에서는 ApexChart 를 사용한다고 합니다. 

*/
