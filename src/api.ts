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

/*

async await 는 어떻게 정확히 동작하는지 정리해야겠네요 

*/
