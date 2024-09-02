import { useState } from "react";
import ColorComponent from "./component2/ColorComponent";
import ColorContext from "./context/ContextAPI";



function App() {

  // contextAPI의 변화를 알릴 때는 Context의 Provider를 사용합니다
  // Provider는 value props를 필수로 전달해야 합니다.

  // ex
  const [color, setColor] = useState('red');

  const handleChange = (e) => {
    setColor(e.target.value);
  }

  return (
    <>
      <h3>컨텍스트 API</h3>

      <select value={color} onChange={handleChange}>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="green">green</option>
      </select>
      
      <ColorContext.Provider value={{color: color}}>
        <ColorComponent/>
      </ColorContext.Provider>


    </>
  )

}

export default App;