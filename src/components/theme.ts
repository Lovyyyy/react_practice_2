import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  bgColor: "grey",
  textColor: "black",
  btnColor: "cyan",
};

export const darkTheme: DefaultTheme = {
  bgColor: "black",
  textColor: "white",
  btnColor: "salmon",
};

/*
  theme 를 설정하기 위해서는 우선 styled.d.ts 파일을 생성해야 한다
  파일명.d.ts 는 declare 파일을 생성하는것으로 모듈에 값을 생성한다.

*/
