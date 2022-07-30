import { useState } from "react";

const Count = () => {
  const [counter, setCounter] = useState(0);
  const [isTrue, setIsTrue] = useState(true);

  const onClick = () => {
    setCounter((num) => num + 1);
  };
  //
  return (
    <div>
      <button onClick={onClick}> 카운팅 </button>
      {counter}
    </div>
  );
};

export default Count;

/*

useState를 선언하고 사용하는 경우 state의 초기값을 자동으로 확인하여 타입을 설정해준다
만약 State의 타입을 직접 설정을 원하는 경우 
  ! const [counter, setCounter] = useState<number | stirng>(0); 
  위와 같이 < > 내부의 타입값을 넣어서 설정 할 수 있으며, 두 가지 타입도 설정이 가능하다 
  다만 하나의 state는 두 가지 타입을 받는 경우는 잘 없을것이고, 상태를 제대로 설정하지 못 한 것일 수 있다

  */
