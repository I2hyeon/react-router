import { createContext, useState } from "react";

//1. createContext() 초기값 지정
const UserContext = createContext({
  state : {id: '', name : ''}, //객체
  action : {
    setUser : () => {} //함수
  }
})

//2. Provider와 Consumer를 외부에서 쓸수 있도록 생성

const UserProvider = ( {children} ) => { //Provider사이에 컴포넌트들을 얻을 수 있음
  //state로 관리
  const [user, setUser] = useState({id: 'aaa', name : 'bbb'});

  //value는 하위로 내려주는 값이 됨.
  const value = {
    state : user,
    action : {setUser}
  }
  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider> //얘는 Provider를 호출하는 곳으로 반환됩니다.
  )
}

const UserConsumer = UserContext.Consumer; //컨슈머

//컨슈머와, 프로바이더 export
export {UserConsumer, UserProvider}

//컨텍스트 객체 반환
export default UserContext;




