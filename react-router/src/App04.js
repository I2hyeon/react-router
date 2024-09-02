import axios from "axios";
import { useEffect, useRef, useState } from "react"; // named export방식
import SockJS from "sockjs-client"; // defalt 방식

function App() {

  // http => 커넥선 리스 프로토콜 (실시간 채팅 X)
  // useEffect(() => {

  //   (async () => {
  //     const result = axios.post("http://localhost:8181/getEntity", {name: "이순신"});
  //     console.log(result);     
  // })(); 

  // },[])


  // websocket => 서버는 대기하고 있다가, 클라이언트 요청이 들어가면 연결을 수립하고
  //              지속적인 통신 채널을 만들게 됩니다

  // useEffect( () => {
  //     // socket 라이브러리 npm install sockjs-client

  //     const socket = new SockJS("http://localhost:8181/api/chat");

  //     // 연결 성립 호출됨
  //     socket.onopen = () => {
  //       console.log("연결 수립");
  //     }

  //     socket.onclose = () => {
  //       console.log("연결 해제");
  //     }

  //     socket.onmessage = (e) => {
  //       console.log("수신 데이터:" + e);
  //     }

  //     // 만약 연결이 해제 된다면 socket.close(); 를 사용해서 만드시 닫아야 함
  // },[])

  const [sock, setSock] = useState(null); // 연결된 소켓을 state로 관리
  const inputRef = useRef(null); // userId input에 접근해서 바로 사용
  const [msg, setMsg] = useState(''); // 메시지 input state로 관리
  const [message, setMessage] = useState([]); // 수신 메시지를 state로 관리, 배열 타입

  const enterSocket = () => {

    const userId = inputRef.current.value; // userId의 value값
    if(userId === '') {
      alert("아이디를 작성하세요");
      return;
    } // 했으면 다음은 매개변수로 userId를 넘겨줘야 함

    if(sock == null) {
      const socket = new SockJS(`http://localhost:8181/api/chat?userId=${userId}&room=1`);
      //연결 성립 호출됨
      socket.onopen = () => {
        console.log("연결 수립")
      }
      socket.onclose = () => {
        console.log("연결 해제");
      }
      socket.onmessage = (e) => {
        // console.log("수신데이터:" + e);
        const newMessage = e.data;

        setMessage( (prev) => {

          if(prev.length >= 30) { // 메시지 크기가 30이 넘으면 앞에서 하나씩 제거
            prev.shift(); // 앞에서 하나 제거
          }
          return [...prev, newMessage]; // 배열 합치기
          
        }); // setter 메서드의 매개변수에 함수를 넣으면 기존 값을 얻을 수 있음 
      }
      setSock(socket); // state에 socket객체 저장
    }
  }

  
  const exitSocket = () => {
      if(sock !== null) { // 있다면
        sock.close();
        setSock(null);
        alert("서버와 연결이 종료되었습니다");
      }
  }

  // 메세지 전송
  const sendMsg = (e) => {
    // 엔터를 칠 때, 값이 비어있지 않을 때, sock이 비어있지 않을 때
    if(sock && msg && e.key === 'Enter') {
      sock.send(msg); // state로 관리되는 msg
      setMsg('');
    }
  }
  
  return <>

    <h3>리액트로 채팅 구현하기</h3>

    아이디 : <input type="text" ref={inputRef}/>
    <button type ="button" onClick={enterSocket}>입장</button>
    <button type ="button" onClick={exitSocket}>퇴장</button>

    <br/>
    메시지 : <input type="text" value={msg} onChange={ e => setMsg(e.target.value)} onKeyUp={sendMsg}/> 
    <div style={{border:"1px solid #777", width: '100%', height:'200px', overflow:'auto'}}>
        {
          message.map( (item, index) => <div key={index}>{item}</div>)
        }
    </div>
    

  </>
}

export default App;