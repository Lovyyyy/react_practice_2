import styled from "styled-components";

interface CircleProps {
  bgColor?: string;
  borderColor?: string;
  text?: string;
  //  props 명 뒤에 ? 를 추가함으로써 optional 값으로 props 속성을 지정해줌
  // optional 로 설정하는 경우 정해진 type 값 또는 undefine 이 들어 갈 수 있게 됨
  // 이로 인해 현재 interface를 사용하는 Circle의 상위 컴포넌트로 borderColor 속성을 지정하지 않아도 정상적으로 코드가 작동 됨.
}

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}
//  Circle 컴포넌트를 구성하는 하위 컴포넌트인 Container에서는 borderColor가 필수로 지정
//  require 상태의 props에 대해서 대해서 입력하지 않는 경우 오류가 발생
// 이를 피하기 위해 상위 컴포넌트의 props 값에 ?? 와 기본값을 추가 해줄 수 있음
//  추가 되는 기본값은 해당 props의 속성과 동일해야 함

// const defaultProps: CircleProps = {
//   bgColor: "white",
//   borderColor: "red",
//   text: "디폴트값은 잘 작동 하시나요?",
// };

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 5px solid ${(props) => props.borderColor};
`;

// const Circle = (props: CircleProps) => {
//   console.log(props);

//   return (
//     <Container bgColor={props.bgColor} borderColor={props.borderColor ?? "pink"}>
//       {props.text}
//     </Container>
//   );
// };

// Circle.defaultProps = defaultProps;
//? props를 props 객체에 두지 않고 모두 나열하는 상태이며, 이 상태에서는 text의 기본 값의 설정이 손 쉽게 가능하다. 근데 props로 객체 형식으로 묶어서 처리하는 경우엔 기본 값을 어떻게 할까?

// ! defaultProps 라는 값을 별도로 선언하여 각 props의 기본 값을 별도로 설정하고, 처리 할 수 있다.
//! 다만 이 방식은 defaultProps에 대해서 더 이상 지원이 되지 않는 사안으로 권장하지 않는다고 한다.
//! typescript 에서 props는 props가 아닌 각 항목마다 나열해주고, 해당 항목의 기본값을 할당하는 것을 권장한다고 한다.
// 아 그러면 props 요소가 너무 길어져서 보기 싫은디 큽...

// const Circle = ({ bgColor, borderColor, text }: CircleProps) => {
//   return (
//     <Container bgColor={bgColor ?? "brown"} borderColor={borderColor ?? "pink"}>
//       {text ?? "기본값으로 해도 됩니까?"}
//     </Container>
//   );
// };
// ? 권장되는 방식의 props의 나열방식 코드

const Circle = ({ bgColor = "crimson", borderColor = "salmon", text = "기본 값" }: CircleProps) => {
  return (
    <Container bgColor={bgColor} borderColor={borderColor}>
      {text}
    </Container>
  );
};

//  위 코드는 자바스크립트의 방식으로 각 속성에 값을 미리 할당해준 상태이며, 값이 없는 경우 할당 된 값이 사용되게 되는 형식이라고 보면 될 듯 하다.

//! props를 props 객체로 한 번에 담아서 props.xxx 로 사용하기 위해서는 defaultProps를 사용해야 하나, 더 이상 defaultProps는 지원이 되지 않으니 ?? 연산자를 사용하는 방식에 적응해보도록 하자.

export default Circle;

/*
interface 는 객체의 속성을 설명해주는 도구
interface 내부의 속성은 모두 사용이 되어야 한다
내부의 값에 속성을 설정했지만 사용을 하지 않으면 안된다. (required)

필수적으로 사용 할 필요가 없는 속성에 한해서는 ?를 붙임으로써 해결이 가능하다

!!! 정리를 해봅시다 
App.tsx 에서는 Circle 컴포넌트를 import 하여 사용한다
사용과 함께 Circle 컴포넌트에 props로 bgColor와 borderColor를 키로 가지는 객체를 전달한다.
typescript 에서는 props로 전달 된 값들에 대해서도 type의 설정이 필요하며
객체의 속성을 설정하기 위해서 inteface 객체를 사용한다.

interface 객체명 {key:value, } 를 통해서 객체의 type을 지정 할 수 있으며, 
key는 props의 key 값, value는 해당 값의 타입의 입력을 요한다. 
interface 내의 키:type이 설정 된 경우 해당 key값은 required 상태이나, 
key값의 뒤에 ?를 붙여줌으로써 optional 설정으로 변경 할 수 있다
optional 설정은 정해진 타입을 사용하거나 입력되지 않은 경우 undefined 가 된다.

App.tsx => Circle.tsx => Container 로 추가로 하위 컴포넌트로 전달이 되는 상황
상위 Circle 컴포넌트는 borderColor가 optional 설정이나, 
하위 Container 컴포넌트는 borderColor가 required 설정인 경우

위 예시의 최상위 App 컴포넌트에서는 borderColor를 Circle 에게 전달 할 필요가 없으나
중간 컴포넌트인 Circle은 하위 컴포넌트인 Container 에게 해당 속성을 꼭 전달해야만 한다.
만약 Circle 에서 Container로 borderColor를 전달하지 않는 다면 (Circle 에서 Container 컴포넌트에 borderColor를 설정하지 않는 경우 )
오류가 발생하게 되며 코드가 정상적으로 실행되지 않는다
! 이는 하위 컴포넌트인 Container의 props 중 borderColor가 required 한 속성이기 때문이다. 

이를 막기 위해서는  Container 컴포넌트의 borderColor 속성을 optional로 처리해주거나
Circle 컴포넌트에서 Container의 borderColor 속성을 지정



! 리액트 데이터 흐름이 위에서 아래로 흐른다는건 알겠는데
! 쓸때마다 하위에서 값을 설정해서 위로 보내준다는 기분이 들어서 너무 헷갈린다 

?? <- 연산자는 널 병합 연산자라고 하며,  왼 쪽의 값이 null / undefined 인 경우, ?? 연산자의 우측 값을 반환하며, 그 외에는 왼쪽의 값을 반환하는 연산자이다. 

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator


! 읽어봄직한 레퍼런스. 이게 진짜 개발자다 싶었다.
https://dev.to/bytebodger/default-props-in-react-typescript-2o5o

*/
