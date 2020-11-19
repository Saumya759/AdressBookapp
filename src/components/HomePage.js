import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersRequest } from "../Redux/Action/index";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import User from "./User";
import "../Styles/HomePage.css";
import Modal from "./Modal";

const HomePage = () => {
  const [show, setShow] = useState(false);
  const [modaldata, setModal] = useState ([]);
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((data) => data.getUserstatus.result.results);
  console.log(data, "111111");

  const handleModal = (modaldata) => {
    setModal(modaldata);
    setShow(!show);
  };

  const handleClose = () => setShow(false);

  useEffect(() => {
    dispatch(getUsersRequest());
  }, []);
  useEffect(() => {
    setList(data);
  }, []);
  return (
    <>
      <div className="header">
        <h1>Address Book</h1>
        <Navbar bg="light" variant="light">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar>
      </div>
      {data?.map((data) => (
        <User {...data} handleModal={handleModal} />
      ))}
      <Modal show={show} handleClose={handleClose} modaldata={modaldata}/>
      <footer>
        <p>"END OF USERS CATALOG"</p>
      </footer>
    </>
  );
};

export default HomePage;
