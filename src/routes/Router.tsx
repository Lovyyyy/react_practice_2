import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./Coins";
import Coin from "./Coin";
import Chart from "./Chart ";
import Price from "./Price";

export interface RouterInterface {
  toModifiedTheme?: () => void;
  isDark?: boolean;
}

/*

함수를 인터페이스를 만들때는 함수의 형태를 만들어서 전달해줘야 함
만약 인자가 있거나 리턴하는 값이 있는 경우 해당 값들의 타입을 세팅해줘야 함 


*/

// const Router = ({ toModifiedTheme, isDark }: RouterInterface) => {
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Coins toModifiedTheme={toModifiedTheme} />} /> */}
        <Route path="/" element={<Coins />} />
        {/* <Route path="/:coinId" element={<Coin isDark={isDark} />}> */}
        <Route path="/:coinId" element={<Coin />}>
          <Route path="chart" element={<Chart />} />
          <Route path="price" element={<Price />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
