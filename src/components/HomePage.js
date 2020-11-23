import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersRequest } from "../Redux/Action/index";
import { Link } from "react-router-dom";
import {
  Navbar,
  FormControl,
  Button,
  Container,
  Row,
  Col,
  Nav,
} from "react-bootstrap";
import User from "./User";
import "../Styles/HomePage.css";
import Modal from "./Modal";
import FilterSetting from "./Setting";

const HomePage = (props) => {
  const [show, setShow] = useState(false);
  const [modaldata, setModal] = useState([]);
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((data) => data.getUserstatus.result.results);
  const loader = useSelector((data) => data.getUserstatus.isLoading);
  const handleModal = (modaldata) => {
    setModal(modaldata);
    setShow(!show);
  };

  const handleClose = () => setShow(false);

  useEffect(() => {
    dispatch(getUsersRequest());
  }, []);

  useEffect(() => {
    const countryName = props.match.params.country.replace("%20", " ");
    const filteredCountry = data?.filter(
      (alldata) => alldata.location.country === countryName
    );
    setList(filteredCountry);
  }, [data]);

  useEffect(() => {
    const newE = data?.filter(
      (data) =>
        data.name.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        data.name.first.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        data.name.last.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
    setList(newE);
  }, [search]);

  return (
    <>
      <div className="header">
        <h2>
          <b>ADDRESS BOOK </b>
        </h2>

        <Navbar bg="light" variant="light">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={(e) => setSearch(e.target.value)}
          />

          <Link to="/">
            <Button variant="secondary">Setting</Button>
          </Link>
        </Navbar>
      </div>

      {loader ? (
        <p className="load_page">Loading...</p>
      ) : (
        list?.map((data) => <User {...data} handleModal={handleModal} />)
      )}
      <Modal show={show} handleClose={handleClose} modaldata={modaldata} />

      <footer className="foot_parent">
        <p className="foot">"END OF USERS CATALOG"</p>
      </footer>
    </>
  );
};

export default HomePage;
