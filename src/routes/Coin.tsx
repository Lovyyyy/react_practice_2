import { useLocation, useParams } from "react-router-dom";

interface LocationInterface {
  state: string;
}

const Coin = () => {
  const { coinId } = useParams();

  const state = useLocation();
  // location 객체에서 state 값 구조분해
  console.log(state);

  return (
    <div>
      <div>Coin : {coinId} </div>
    </div>
  );
};

export default Coin;
