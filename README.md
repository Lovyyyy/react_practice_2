USING TYPESCRIPT \_ REACT PRACTICE

Nested Route
=> 라우트 내부의 라우트
한 페이지 내부에서 탭별로 다른 화면을 렌더링 해줄때
STATE로 상태관리를 통해서 렌더링 하는게 아니라, (Studylog 에서 내가 한게 이 방식 )
URL을 통해서 렌더링을 관리할 때 사용 할 수 있음
URL로 하는게 더 좋은 이유는 이전 페이지에 접속해서 탭을 선택하는게 아닌
URL 을 통해서 원하는 페이지로 직접 연결을 할 수 있다.
실제로 studylog 에서는 todos 페이지 이후 탭을 선택해야 각 투두 / 차트를 볼 수 있음
차트를 바로 보거나 todos를 바로 보거나 할 수는 없음
사용 방법

1.  상위 Route 내부에 Route를 추가로 만들어주기
2.  Outlet으로 렌더링하기

Outlet 으로 렌더링 하길 원치 않는다면

1.  상위 컴포넌트 내부에
    <Routes>
    <Route path={`/chart`} element={<Chart />} />
    <Route path={"/price"} element={<Price />} />
    </Routes>
    처럼 하위 라우터를 만들어서 넣기

https://reactrouter.com/docs/en/v6/getting-started/overview#nested-routes
