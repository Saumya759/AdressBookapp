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
        <div className="col-md-6 col-12 mt-5">
          <div className="row">
            <div className="col-md-10 col-8 d-flex">
              {" "}
              <div className="col-md-4 col-4">
                {" "}
                <img
                  className="mr-3 w-100"
                  src={picture.thumbnail}
                  alt={fullName(name.title, name.first, name.last)}
                />
              </div>
              <div className="col-md-8 col-8">
                {" "}
                <h3 className="h5 m-1">
                  {fullName(name.title, name.first, name.last)}
                </h3>
                <p className="email">
                  <a href={`mailto:${email}`}>{email}</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 col-4">
              <Button
                variant="info"
                onClick={() => handleModal({ location, cell, phone })}
              >
                Info
              </Button>{" "}
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
};
export default User;
