import { createContext } from "react";




// 컨텍스트는 컴포넌트 외부에서 관리되는 객체
const ColorContext = createContext({color: 'green'}); //초기값을 지정


export default ColorContext;