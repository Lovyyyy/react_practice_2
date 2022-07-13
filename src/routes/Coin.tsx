import { useParams } from "react-router-dom";

const Coin = () => {
  const { coinId } = useParams();

  return (
    <div>
      <div>Coin : {coinId} </div>
    </div>
  );
};

export default Coin;
