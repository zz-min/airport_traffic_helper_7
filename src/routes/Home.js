import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  return (
    <>
      <Link to="/login">
        <div className="Home">
          <h1>welcome</h1>
          <h3>Go to login</h3>
          <img src={"/img/logo.jpg"} alt={"logo"} />
        </div>
      </Link>
    </>
  );
}

export default Home;
