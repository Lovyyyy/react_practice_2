import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    tabColor: string;
    accentColor: string;
  }
}

// styled 컴포넌트의 정의 파일에 생성한 테마의 타입등을 설명해주기
