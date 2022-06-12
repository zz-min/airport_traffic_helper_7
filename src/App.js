import {
  BrowserRouter,
  Link,
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Test from "./routes/Test";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import Main from "./routes/Main";

var loginValidity = localStorage.getItem("loginValidity");
//JWT구현전 임시 사용 - 로그인 유형성 검사 변수를 localStorage에 저장

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={loginValidity === "true" ? <Main /> : <Home />}
        />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/main" element={<Main />} />
        <Route path="/test" element={<Test />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/* 
<HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>

<Route
path="/*"
element={loginValidity === "true" ? <Main /> : <Home />}
/>
<Route path="/login" element={<Login />} />
<Route path="/signUp" element={<SignUp />} />
<Route path="/main" element={<Main />} /> */
