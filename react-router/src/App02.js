import { useEffect, useState } from "react";

function App () {

  // ajax ->
  // https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json

  const [data, setData] = useState();

  const getData = () => {
    fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json') // 해당 주소에서 데이터를 가지고 온다
    .then( response => response.json() )
    .then( data => {
      // state로 관리함
      setData(data);
    })

  }

  // 화면 로드시에 데이터를 가지고 올 때는 useEffect훅
  const [raw, setRaw] = useState();
  useEffect( () => {

    fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    .then( response => response.json() )
    .then( data => {
      setRaw(data);     
    })
  }, []) // 반드시 딱 한 번만 실행하는 코드 []

  
  return (

    <>
      <h3>ajax로 데이터 처리하기</h3>
      <button onClick={getData}>클릭할 때 네트워크 통신</button>

      {
        data !== undefined ? 
        <div>
          {data.userId}<br/>
          {data.userPw}<br/>
          {data.userName}<br/>
        </div>
        :
        null
      }

      <h3>로드시에 데이터 가져오기</h3>
      {
        raw && <div>
          {raw.userId}<br/>
          {raw.userPw}<br/>
          {raw.userName}<br/>
        </div>
      }
    </>

  )

}

export default App;