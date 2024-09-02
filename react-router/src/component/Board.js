import { Link, NavLink, Outlet } from "react-router-dom";

function Board() {
  const myStyle = { color: "green", backgroundColor: "yellow" };

  return (
    <>
      <h3>글 목록</h3>

      <ul>
        {/* <li>
          <Link to="/board/1">1번글</Link>
        </li>
        <li>
          <Link to="/board/2">2번글</Link>
        </li>
        <li>
          <Link to="/board/3">3번글</Link>
        </li> */}

        <li>
          <NavLink
            to="/board/1"
            style={({ isActive }) => (isActive ? myStyle : undefined)}
          >
            1번글
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/board/2"
            style={({ isActive }) => (isActive ? myStyle : undefined)}
          >
            2번글
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/board/3"
            style={({ isActive }) => (isActive ? myStyle : undefined)}
          >
            3번글
          </NavLink>
        </li>
      </ul>

      {/* 중첩 라우터에서 하위 컴포넌트를 표시함 */}
      <Outlet />
    </>
  );
}

export default Board;
