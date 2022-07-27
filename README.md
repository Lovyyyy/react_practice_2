> USING TYPESCRIPT / REACT PRACTICE
>
> > TypeScript  
> > Styled-Components  
> > React-Route-Dom (Nested-Routes)  
> > React-Queary  
> > APEXCHART
>
> React-Route-Dom (Nested-Routes)
> 라우트 내부의 라우트
>
> 한 페이지 내부에서 선택한 탭/버튼에 따라서 페이지 내부 일부에 각각 다른 화면을 렌더링 해줄 때  
> STATE로 상태관리를 통해서 렌더링 하는게 아니라, URL을 통해서 렌더링을 관리할 때 사용 할 수 있음 (Studylog 에서 내가 한게 이 방식 )
>
> URL로 하는게 더 좋은 이유  
> 페이지에 접속해서 탭을 선택 하는게 아닌 URL의 조작을 통해 원하는 페이지로 바로 접속 할 수 있다.  
> 실제로 studylog 에서는 todos 페이지 이후 탭을 선택해야 각 Todos/Chart 를 볼 수 있으며, url을 통한 접속으로는 접근 불가 함.
>
> 사용 방법
>
> 1.  상위 Route 내부에 Route를 추가로 만들어주기
> 2.  Outlet으로 렌더링하기
>
> Outlet 으로 렌더링 하길 원치 않는다면
>
> 1.  상위 컴포넌트 내부에
>
> ```javascript
> <Routes>
>   <Route path={`/chart`} element={<Chart />} />
>   <Route path={"/price"} element={<Price />} />
> </Routes>
> ```
>
> 위 코드 처럼 하위 라우터를 만들어서 넣기
>
> https://reactrouter.com/docs/en/v6/getting-started/overview#nested-routes
>
> Outlet 으로 하위 컴포넌트를 만들었다면, props는 어떻게 내리시겠습니까?
>
> ```javascript
> <Routes>
>   <Route path={어쩌고} element={<저쩌고 props={프롭수} />} />
> </Routes>
> ```
>
> 위 라우트를 사용하는 방식은 엘리멘트의 저쩌고 컴포넌트에 프롭스를 내려주면 되는데
>
> 아웃렛으로 만들면 그게 좀 어렵습니다
>
> 1. Outlet은 context 속성을 통해 하위컴포넌트로 원하는 속성을 전달 할 수 있다.
> 2. 전달 하는 속성을 사용 할 때는 useOutletContext 를 사용하자
>
> 사용법
>
> 1. JS
>
> ```javascript
>
> <<상위 컴포넌트 >>
> <Outlet context={[count , setCount]} />
>
> <<하위 컴포넌트 >>
> const [count, setCount] = useOutletContext()
>
> ```
>
> 위 코드 처럼 상위 컴포넌트에서 context로 전달하고, 하위 컴포넌트에서 상속 받은 데이터를 사용 할 수 있다.
> 데이터의 형태는 원시, 참조 자료형 모두 가능하다. ( 위 예시는 배열)
>
> [!] 그러나! TS는 위 처럼 사용하면 타입 값을 상속받아 오지 못 한다.
> 그래서 받아 온 데이터에 타입을 다시 설정새줘야 하는 번거로움이 발생한다.
>
> 이를 해소 하기 위하여 타입 스크립트에서는 조금 다른 방법을 통해 사용한다.
>
> 2. TS
>
> - interface || type 으로 상속 할 데이터의 타입을 결정한다.
> - Outlet의 Context 속성은 동일하게 사용한다.
> - useOuletContext를 하위 컴포넌트에서 사용하지 않고, 상위 컴포넌트에서 호출한다.
> - 호출 시에는 임의의 함수를 만들어서 함수를 호출하며, 호출시 최초 설정한 인터페이스 | 타입을 적용한다
> - 임의의 함수를 export 한 후 하위 컴포넌트에서 import를 한다.
> - 하위 컴포넌트에서는 import한 함수를 Hook을 사용하듯이 사용한다.
>
> ```typescript
>
> <<상위 컴포넌트>>
>
> interface CoinIdInterface {
> coinId : string | undefined
> }
>
> <Outlet context={coinId}>
>
> export const useCoinId = () => {
> return useOutletContext<ContextInterface>();
> };
>
> <<하위 컴포넌트>>
>
> const coinId = useCoinId()
>
> ```
>
> - 위 코드와 같이 상위 컴포넌트에서 타입까지 모두 설정하고 새로운 함수로 만들어서 호출까지 진행한다.
> - 그리고 새로 만들어진 함수를 하위 컴포넌트로 전달하여, 타입까지 모두 함께 전달하여 사용한다.
>
> > 개인적으로는 그냥 내려주고, 하위에서 타입을 다시 설정하는것도 괜찮을것 같았다.
> > 다만 다시 생각 해보면 데이터가 많아 질 수록 일을 두번 씩 하는건 비효율적일 것이고,
> > Outlet에 속하는 하위 컴포넌트가 많아 질 수록 모든 컴포넌트마다 동일 코드를 붙여넣기 하는 비효율이 발생하게 될 것이다.

---

> WHAT IS REACT QUERY ?
>
> - 리액트 쿼리가 뭐냐구요!!!!
> - 우리가 실행하고 있는 로직을 축소시켜준다.
> - 최상위 컴포넌트에서 Queryprovider 컴포넌트를 만들어서 감싸주기
> - Queryprovider는 client를 props로 가지며,
> - const quearyClient = new QuearyClient() 로 새로운 클라이언트 객체를 생성해서 프롭스로 넣어줘야함
> -
>
> - 리액트 쿼리는 useQueary 라는 훅을 사용 할 수 있음
> - useQueary 훅의 첫 번째 요소로는 배열이 들어오고 두 번째 요소로는 함수가 들어 옴
>
> - useQueary 는 함수를 통해 가지고 온 데이터를 캐싱한다
>   - 통신상의 메모리 소모가 적겠군요?
>     -- 대신 최초 캐시메모리에 저장해주려면 그 만큼 공간을 따로 가지고 있어야겠군요?
>     --- 페이지의 전환이 자주 일어날 때 사용하면 좋겠군요?
>
> @tanstack/react-query-devtools
>
> - 리액트 쿼리는 개발자도구를 별도로 제공한다
> - 패키지도 따로 설치해야 함 ㅎㅎ!
> - <ReactQueryDevtools initialIsOpen={true} /> 컴포넌트를 App의 렌더링 부분에 넣으면 개발자 도구가 뜸
> - 개발자 도구를 통해서 쿼리에 어떤 내용이 있는지 확인 할 수 있음 / 신기해 신기해
>   -- 근데 isLoading 은 안보이는데... 어떻게 쓰는거지?
