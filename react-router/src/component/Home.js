import { Link } from "react-router-dom";

function Home() {

  return (

    <div>
      <h3>홈페이지 입니다</h3>
      <Link to='/user?name=홍길동&age=20' >user페이지</Link>
      <br/>
      <Link to='/info/1' >info페이지</Link>
      <br/>
      <Link to='/info/2' >info페이지</Link>
      <br/>
      <Link to='/info/3' >info페이지</Link>

    </div>

  )
}

export default Home;