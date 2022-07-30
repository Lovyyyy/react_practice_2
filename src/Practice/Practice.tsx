// import React from "react";
// import Count from "./State";
// import Circle from "./Props";
// import Form from "./Form";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;
function Bpp() {
  return (
    <div>
      <Wrapper>
        <Title> HELLO WORLD </Title>

        {/* <Circle text="text, bgColor" bgColor="cornflowerblue" />
        <Circle text="text,bgColor,borderColor" bgColor="cyan" borderColor="cornflowerblue" />
        <Circle />
        <Count />
        <Form /> */}
      </Wrapper>
    </div>
  );
}

export default Bpp;

/* typescript 에서 styled-components 를 사용하려면? 

   ! npm i @types/styled-components 

  @type 의 명령어의 정체는 무엇일까요 
  @type 은 깃헙 레포지토리로 여러 유명한 npm 라이브러리를 가지고 있음
  https://github.com/DefinitelyTyped/DefinitelyTyped

*/
