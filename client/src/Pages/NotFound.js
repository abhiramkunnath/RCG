import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Common.scss";
import "../Styles/NotFound.scss";

function NotFound() {
  return (
    <div className="notfound">
      <div className="textBox">
        <span className="letter1">Page</span>
        <span className="letter2">Not</span>
        <span className="letter3">Found</span>
      </div>
      <div className="notfound-cta">
        <p>Oops you have come to nowhere, why don't you get some compliments</p>
        <Link to="/generate">
          <div className="notfound-cta-btn btn">Get Compliments ⟶</div>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
