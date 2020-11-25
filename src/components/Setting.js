import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Row, Col, Navbar } from "react-bootstrap";
import { getUsersRequest } from "../Redux/Action/index";
import { Link, Redirect, useHistory } from "react-router-dom";

const Setting = (props) => {
  const [country, setCountry] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector((data) => data.getUserstatus.result.results);

  useEffect(() => {
    dispatch(getUsersRequest());
    setCountry([]);
  }, []);

  useEffect(() => {
    setCountry(data);
  }, [data]);

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };
  const handlesubmit = () => {
    props.history.push(`/homepage/${country}`);
  };

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Row>
            <Col xs={6}>
              <select
                type="text"
                name="country"
                onChange={(e) => handleCountryChange(e)}
              >
                <option value>Nationalities</option>
                {data &&
                  data.map((opt, i) => (
                    <option value={opt.location.country}>
                      {opt.location.country}
                    </option>
                  ))}
              </select>
            </Col>
            <Col xs={6}>
              <Button variant="primary" onClick={handlesubmit}>
                Submit
              </Button>{" "}
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};
export default Setting;
