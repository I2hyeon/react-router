import A from "./component2/A";
import B from "./component2/B";
import { UserProvider } from "./context/ContextAPI2";

function App() {

  // 1. 값을 공통으로 전달받는 상위 컴포넌트에 Proveder를 감싼다
  // 2. 값을 사용하는 컴포넌트에서는 userContext()훅으로 Context 받습니다

  return (
    <>
      <h3>App컴포넌트</h3>

      <UserProvider>
      <A/>
      <B/>
      </UserProvider>

    </>
  );
}

export default App;