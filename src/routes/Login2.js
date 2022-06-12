import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import "./Login.scss";
import UserPool from "../libs/UserPool";

function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  // var loginValidity = localStorage.getItem("loginValidity");

  const onSubmit = (e) => {
    e.preventDefault();
    const user = new CognitoUser({
      Username: id,
      Pool: UserPool,
    });
    const authDetails = new AuthenticationDetails({
      UserName: id,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("onSuccess:", data);
        localStorage.setItem("loginValidity", "true");
        //alert("login성공");
        navigate("/main");
      },
      onFailure: (err) => {
        console.log("onFailure:", err);
        alert("아이디 또는 비밀번호를 확인해주세요");
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired:", data);
      },
    });
  };
  return (
    <div className="loginBox">
      <h1>로그인</h1>
      <div className="inputBox">
        <form onSubmit={onSubmit}>
          <span>ㅤㅤIDㅤㅤㅤ:ㅤ</span>
          <input
            value={id}
            placeholder="아이디를 입력해주세요"
            onChange={(event) => {
              setId(event.target.value);
            }}
          ></input>
          <br></br>
          <span>PASSWORDㅤ:ㅤ</span>
          <input
            value={password}
            placeholder="비밀번호를 입력해주세요"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></input>
          <br></br>
          <button type="submit" id="btnSubmit">
            Login
          </button>
        </form>
      </div>
      <Link to="/SignUp">
        <div className="signUpLink">회원가입하러가기</div>
      </Link>
    </div>
  );
}

export default Login;
