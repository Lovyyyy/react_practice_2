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

WHAT IS REACT QUERY ?

- 리액트 쿼리가 뭐냐구요!!!!
- 우리가 실행하고 있는 로직을 축소시켜준다.
- 최상위 컴포넌트에서 Queryprovider 컴포넌트를 만들어서 감싸주기
- Queryprovider는 client를 props로 가지며,
- const quearyClient = new QuearyClient() 로 새로운 클라이언트 객체를 생성해서 프롭스로 넣어줘야함
-

- 리액트 쿼리는 useQueary 라는 훅을 사용 할 수 있음
- useQueary 훅의 첫 번째 요소로는 배열이 들어오고 두 번째 요소로는 함수가 들어 옴

- useQueary 는 함수를 통해 가지고 온 데이터를 캐싱한다
  - 통신상의 메모리 소모가 적겠군요?
    -- 대신 최초 캐시메모리에 저장해주려면 그 만큼 공간을 따로 가지고 있어야겠군요?
    --- 페이지의 전환이 자주 일어날 때 사용하면 좋겠군요?

@tanstack/react-query-devtools

- 리액트 쿼리는 개발자도구를 별도로 제공한다
- 패키지도 따로 설치해야 함 ㅎㅎ!
- <ReactQueryDevtools initialIsOpen={true} /> 컴포넌트를 App의 렌더링 부분에 넣으면 개발자 도구가 뜸
- 개발자 도구를 통해서 쿼리에 어떤 내용이 있는지 확인 할 수 있음 / 신기해 신기해
  -- 근데 isLoading 은 안보이는데... 어떻게 쓰는거지?
