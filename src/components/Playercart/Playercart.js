import React from "react";
import "./Playercart.css";
import { Button } from "react-bootstrap";

const Playercart = (props) => {
  // console.log(props);

  const { name, img, salary } = props.player;

  return (
    <div className="container cart">
      <div className="card-img">
        <img src={img} alt="" width="200px" height="200px" />
      </div>
      <div className="text-center">
        <p>{name}</p>
        <p>${salary}</p>
        <Button
          variant="primary"
          onClick={() => props.handleplayer(props.player)}
        >
          Select
        </Button>
      </div>
    </div>
  );
};

export default Playercart;
