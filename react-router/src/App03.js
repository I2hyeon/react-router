

import axios from "axios";
import { useEffect } from "react";

function App() {

  useEffect(() => {
      (async function Data() {
          const data = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json');
          console.log(data.data); 
      })();
    }, []);

  const handleClick = async () => {
    
    // 비동기 방식에서 데이터의 순서를 보장받고 싶다면 이렇게 작성해야 합니다
    // axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    // .then(response => {
    //   console.log(response.data);
    //   console.log(1);

    //   axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
    //   .then(response => {
    //     console.log(response.data);
    //     console.log(3);

    //     axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
    //     .then(response => {
    //       console.log(response.data);
    //       console.log(5);
    //      });
    //   });
    //});

    // async(이거 비동기야), await(그러니까 기다려) 
    // 1. async 함수 안에서만 await 키워드를 쓸 수 있음
    // 2. 만약 function 앞에 async를 붙이면 언제나 Promise 객체를 반환함
    // 3. 함수의 리턴이 Promise라면 await 키워드를 붙이고 then을 생략할 수 있음

    // 장점
    // 1. 코드가 간결해짐
    // 2. 수행 방식을 동기 방식으로 바꾸면서 순서 보장이 들어감

    const data1 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    console.log(1);
    console.log(data1.data);
    

    const data2 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
    console.log(2);
    console.log(data2.data);
    

    const data3 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
    console.log(3);
    console.log(data3.data);


    const result = await fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
                          .then(response => response.json())
    // const result = await response.json();
    console.log(result);
  }

  // 실습 - 힌트 - 즉시실행 함수를 사용함
  // 화면 로드시에 hi.json 데이터를 async, await으로 가져오는 프로그램 코드를 작성해보세요

  useEffect(() => {
    (async function Data() {
        const data = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json');
        console.log(data); 
        // state에 저장
    })();
  }, []);

 
  return (
    <>
      

      <h3>엑시오스로 데이터 받기</h3>

      <button onClick={handleClick}>클릭시 네트워크통신으로 데이터 가져오기</button>


    </>
  )

}
export default App;