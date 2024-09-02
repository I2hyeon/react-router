import { useLocation, useParams, useSearchParams } from "react-router-dom";


function User() {

  // 1. userLocation훅을 사용

  // const location = useLocation();

  // const {search, pathname} = location;

  // console.log(search);
  // console.log(pathname);

  // 2. useSearchParams()훅을 사용

  const [obj, setObj] = useSearchParams();
  // console.log(obj); // 값을 얻을 수 있음
  // console.log(setObj); // URI 값을 강제로 변경 가능

  let name = obj.get("name"); // name 키를 얻음
  let age = obj.get("age"); // age 키를 얻음

  console.log("전달된 파라미터", name, age);

  const handleClick = () => {
    setObj({name: '이순신', age: 30})

  }
  

  return (

    <div>
      <h3>유저 페이지입니다</h3>
      <button onClick={handleClick}>URI값 변경</button>
    </div>

  )

}

export default User;