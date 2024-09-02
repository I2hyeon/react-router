import ColorContext from "../context/ContextAPI";


function ColorComponent() {


  // 컨텍스트 API를 전달받은 하위컴포넌트에서는 Consumer를 사용해서 값을 받을 수 있음
  // 컨슈머는 return으로 화면에 보여질 JSX문법을 작성할 수 있음

  return (
    <ColorContext.Consumer>
    {
      (value) => {
        return <>
          <h3>하위 컴포넌트 </h3>
          <div>
            값:{value.color}
          </div>
        </>
      }
    }
    </ColorContext.Consumer>
  )

}

export default ColorComponent;