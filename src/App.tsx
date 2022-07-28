import Router from "./routes/Router";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { darkTheme, lightTheme } from "./theme";
import { useState } from "react";

const Globalstyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
// google font 에서 원하는 폰트 가지고 오기 

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  // 가지고 온 폰트 적용 /  폰트 출력 불가시 대체 폰트 설정 
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor}
}
a {
  text-decoration:none;
  color:inherit;
}
`;

// styled-rest 라이브러리를 설치 후 <Reset /> 컴포넌트를 통해서도 사용 가능함
// 구글 폰트 및 세부설정 몇 가지를 제외하고는 reset의 초기값  코드가 styled-reset 라이브러리에 있음
// 굳이 라이브러리를 사용하지 않아도 괜찮은 부분은 사용 없이 처리가 괜찮은것 같다
// 왜 괜찮은데?
// 음 그건 생각 해볼 문제네요

function App() {
  const [isDark, setIsDark] = useState(true);

  const toModifiedTheme = () => {
    setIsDark((boolean) => !boolean);
  };

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Globalstyle />
        <ReactQueryDevtools initialIsOpen={false} />
        <Router toModifiedTheme={toModifiedTheme} isDark={isDark} />
      </ThemeProvider>
    </>
  );
}

export default App;

/*


<ThemeProvider> 를 index.tsx 에서 app.tsx로 옮겼다.

왜? 
왜냐하면 index 에서는 state를 사용 할 수가 없어서요
그래서 App 으로 옮겨서 상태를 통해 테마색상을 관리해주고 있습니다. 


*/
