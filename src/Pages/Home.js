import React from "react"
import "./home.css";
import InstagramPage from "../Components/instagram/index";

function Home() {
  return (
    <div className="home">
      <div className="title-wrap">
        <h2 className="home-title">LaVanda</h2>
      </div>
      <div className="subtitle-wrap">
        <h2 className="home-subtitle"> </h2>
      </div>
      <InstagramPage/>
    </div>
  )
}

export default Home;