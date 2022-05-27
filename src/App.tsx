import React from "react";
import Practice from "./pages/Practice";
import Circle from "./components/Props_practice";

function App() {
  return (
    <div className="App">
      <Circle text="text, bgColor" bgColor="cornflowerblue" />
      <Circle text="text,bgColor,borderColor" bgColor="cyan" borderColor="cornflowerblue" />
      <Circle />
    </div>
  );
}

export default App;

/* typescript 에서 styled-components 를 사용하려면? 

   ! npm i @types/styled-components 

  @type 의 명령어의 정체는 무엇일까요 
  @type 은 깃헙 레포지토리로 여러 유명한 npm 라이브러리를 가지고 있음
  https://github.com/DefinitelyTyped/DefinitelyTyped

*/
