import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
// import "animate.css/animate.min.css";
import "../Styles/animate.css";
import { Button } from "react-bootstrap";
import "../Styles/User.css";

const User = (props) => {
  const { email, name, picture, handleModal, location, cell, phone } = props;
  const fullName = (title, first, last) => {
    return (
      <p>
        {title}. {first}
        {last}
      </p>
    );
  };

  return (
    <>
      <ScrollAnimation animateIn="fadeIn" className="animation">
        <li className="media col-12 col-md-6 col-xl-4 mt-5">
          <img
            className="mr-3"
            src={picture.thumbnail}
            alt={fullName(name.title, name.first, name.last)}
            height={90}
          />
          <div className="media-body">
            <h3 className="h5 m-1">
              {fullName(name.title, name.first, name.last)}
            </h3>
            <p>
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          </div>
        </li>
        <Button
          variant="info"
          className="details"
          onClick={() => handleModal({ location, cell, phone })}
        >
          Info
        </Button>{" "}
      </ScrollAnimation>
    </>
  );
};
export default User;
