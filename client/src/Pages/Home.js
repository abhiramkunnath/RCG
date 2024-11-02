import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Common.scss";
import "../Styles/Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="textBox">
        <span className="letter1">Random</span>
        <span className="letter2">Compliment</span>
        <span className="letter3">Generator</span>
      </div>
      <div className="home-cta">
        <p>Let's make a better world full of compliments.</p>
        <Link to="/generate">
          <div className="home-cta-btn btn">Get Compliments ⟶</div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
