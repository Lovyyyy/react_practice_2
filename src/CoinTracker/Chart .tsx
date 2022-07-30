import { useQuery } from "@tanstack/react-query";

import { fetchCoinHistory } from "./api";

import { useCoinData } from "./Coin";
import ApexChart from "react-apexcharts";

import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atom";

interface coinHistoryInterface {
  close: string;
  high: string;
  low: string;
  market_cap: number;
  open: string;
  time_close: number;
  time_open: number;
  volume: string;
}

const Chart = () => {
  // const { coinId, isDark } = useCoinData();
  const isDark = useRecoilValue(isDarkAtom);
  const { coinId } = useCoinData();
  const { isLoading, data } = useQuery<coinHistoryInterface[]>(["coinHistory", coinId], () =>
    fetchCoinHistory(coinId)
  );

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
      <ApexChart
        type="line"
        series={[
          {
            data: data?.map((coinInfo) => Number(coinInfo.close)) as number[],
            // as 를 사용한 이유는?
            // Number로 데이터 타입을 변경해줬으나, Number[] || undefined가 나와서 as를 통해 타입을 고정시킴
          },
        ]}
        options={{
          theme: {
            mode: isDark ? "dark" : "light",
          },
          chart: {
            height: 300,
            width: 500,
            toolbar: {
              show: false,
            },
            background: "transparent",
          },
          grid: { show: false },
          stroke: {
            curve: "smooth",
            width: 4,
          },
          yaxis: {
            show: false,
          },
          xaxis: {
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: { show: false },
          },
        }}
      />
    </div>
  );
};

export default Chart;

/*


CHART 에서는 ApexChart 를 사용한다고 합니다. 

*/
