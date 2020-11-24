import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersRequest } from "../Redux/Action/index";
import { Link } from "react-router-dom";
import { Navbar, FormControl, Button } from "react-bootstrap";
import User from "./User";
import "../Styles/HomePage.css";
import Modal from "./Modal";
import Pagination from "react-bootstrap/Pagination";

const HomePage = (props) => {
  const [show, setShow] = useState(false);
  const [modaldata, setModal] = useState([]);
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [Listpage, setListPage] = useState([]);
  const [activePage, setActivePage] = useState(1);

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
    console.log(filteredCountry, "yyyyyyyyyyyy");
    setList(filteredCountry);
    setListPage(filteredCountry);
  }, [data]);

  useEffect(() => {
    const newE = data?.filter((data) => {
      return (
        data.name.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        data.name.first.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        data.name.last.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    });
    setList(newE);
  }, [search]);

//   useEffect(() => {
//     if
//     (setList(newList)){
// // 
//     }

//   }, []);

  const handleChange = (pageIndex) => {
    setActivePage(pageIndex);
    console.log(pageIndex, "TTTTTTTT");
    let initialIndex = (pageIndex - 1) * 5;
    let finalIndex = (pageIndex + 1) * 5 - 5;
    console.log(finalIndex, initialIndex, "eeeeeeeeee");
    let newList = Listpage.slice(initialIndex, finalIndex);
    console.log(newList, "WWWWWWWWWW");
    setList(newList);
  };

  let items = [];
  if (Listpage && Listpage.length) {
    let check = Listpage.length % 10;
    let numLength = check !== 0 ? Listpage.length / 5 + 1 : Listpage.length / 5;
    console.log(check, "nnnnnnnnnn");
    for (let number = 1; number <= numLength; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === activePage}
          onClick={() => handleChange(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
  }
  const paginationBasic = (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
  console.log(list, "SSSSSSSSSSSSS");
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

      <div className="page_tab">{paginationBasic}</div>

      <footer className="foot_parent">
        <p className="foot">"END OF USERS CATALOG"</p>
      </footer>
    </>
  );
};

export default HomePage;
