import React, { useCallback, useRef } from "react";
import { Title } from "../components";

export default function InputFocusTest() {
  const inputRef = useRef<HTMLInputElement>(null);
  // inputRef.current는 초깃값을 Null로 서정했다가 리액트가 Null이 아닌 값으로 바꾸므로
  // useCallback 훅의 의존성 목록에 inputRef.current를 추가해야합니다.
  // **useRef 훅 호출로 얻은 inputREf의 current속성은 그 값이 변해도 다시 렌더링되지 않도록 설계되었습니다.
  // 이처럼 리렌더링이 필요 없을 때는 의존성 목록에 포함하지 않습니다.
  const onClick = useCallback(() => inputRef.current?.click(),[]);
  
  return (
    <section className="mt-4">
      <Title>ClickTest</Title>
      <div className="mt-4 flex justify-center items-center">
        <button className="btn btn-primary mr-4" onClick={onClick}>
          Click Me
        </button>
        <input ref={inputRef} type="file" accept="image/*" className="hidden" />
      </div>
    </section>
  );
}
