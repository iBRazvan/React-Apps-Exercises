import React from "react";
import "./App.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-header">
          <img src={props.avatar} className="avatar" />
          <div className="name-box">
            <p>{props.name}</p>
            <p>
              <b>{props.skillBrainPosition}</b>,{" "}
              {props.actualJob}
            </p>
          </div>
        </div>
        <p className="card-text">{props.shortDesctioption}</p>
        <div className="link-area">
          <a
            href={props.socialMediaLiks.gitHub}
            target="_blank"
            className="btn btn-primary"
          >
            <img src={require("./github.png")} />
          </a>
          <a
            target="_blank"
            href={props.socialMediaLiks.linkedIn}
            className="btn btn-primary"
          >
            <img src={require("./linkedin.png")} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
