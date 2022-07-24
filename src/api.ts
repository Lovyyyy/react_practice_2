import axios from "axios";

const BASE_URL = "https://api.coinpaprika.com/v1";

export const fetchCoins = async () => {
  // 데이터 얻는법
  // axios.get(url).then(res => console.log(res.data))
  return await axios.get(`${BASE_URL}/coins`).then((res) => res.data.slice(0, 100));
};

export const fetchCoinInfo = async (coinId?: string) => {
  return await axios.get(`${BASE_URL}/coins/${coinId}`).then((res) => res.data);
};

export const fetchCoinPrice = async (coinId?: string) => {
  return await axios.get(`${BASE_URL}/tickers/${coinId}`).then((res) => res.data);
};

export const fetchCoinHistory = async (coinId?: string) => {
  // 1주일 전 시간을 구하기, 60초, 60분 , 24시간, 7일  을 곱해하면 1주일을 초로 구한값이 나옴
  return await axios
    .get(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`)
    .then((res) => res.data);
};

/*

async await 는 어떻게 정확히 동작하는지 정리해야겠네요 

*/
