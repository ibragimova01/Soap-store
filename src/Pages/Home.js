import React from "react"
import "./home.css";
import InstagramPage from "../Components/instagram/index";
import Cards from "../Components/cards/index";

function Home() {
  return (
    <div className="home">
      <div className="home__inner">
        <h2 className="home-title">LaVanda</h2>
      </div>
      <Cards/>
      <InstagramPage/>
    </div>
  )
}

export default Home;