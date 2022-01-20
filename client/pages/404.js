import Router from "next/router";
import React, {useEffect, useState} from "react";

export default function Custom404() {
  let [second, setSecond] = useState(5)

  
  setTimeout(() => {
    if(second === 1) {
      Router.push("/")
    }
    setSecond(--second)
  }, 1000)
  
  useEffect(() => {}, [second])


  return (
    <>
      <div className="error_container">
        <h1>{second}</h1>
        <h1>⛔️ 404 Error - Page Not Found ⛔️</h1>
        <h4>5초 뒤 다시 메인페이지로 자동 이동 됩니다.</h4>
      </div>
    </>
  )
}