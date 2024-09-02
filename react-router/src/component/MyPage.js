import { Navigate, useNavigate } from "react-router-dom";

function MyPage () {

  // 권한검사 - 렌더링 과정에는 사용이 불가능 <-- 
  // let nav = useNavigate(); 

  let loginYN = false; // 로그인 처리에 대한 내역을 관리하는 값
  if(!loginYN) {
    // nav('/');
    return <Navigate to='/' replace={true}></Navigate>; // history를 남기지 않음
  }

  return (

    <>
      <h3>권한이 있는 유저만 접근이 가능한 화면</h3> 
    </>

  )


}

export default MyPage;