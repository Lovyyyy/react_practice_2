import React, { useState } from "react";

const Form = () => {
  const [userName, setUserName] = useState("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    //  직전 코드는 구조분해  코드인가?
    // evnet : {
    //   currentTarget : value
    // }
    // setUserName(value);

    setUserName(e.currentTarget.value);
    console.log(typeof value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={userName} onChange={onChange} type="text" placeholder="username" />
        <button> Log in </button>
      </form>
    </div>
  );
};

export default Form;

/*
 
onChange의 e 객체의 타입을 설정하는 방법 

e:React.FormEvent<HTMLInputElement> 

? 이런건 어떻게 알 수 있는가? 
없다. 검색하거나 공식문서를 읽어봐야 한다 ㅠㅠ 
*/

//
