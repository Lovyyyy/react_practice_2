import axios from "axios";

// export const CoinData = () => {
//   axios.get("https://api.coinpaprika.com/v1/coins").then((res) => {
//     const data = res.data.slice(0, 100);
//   });
// };

export const fetchCoins = async () => {
  // 데이터 얻는법
  // axios.get(url).then(res => console.log(res.data))
  return await axios
    .get("https://api.coinpaprika.com/v1/coins")
    .then((res) => res.data.slice(0, 100));
};
