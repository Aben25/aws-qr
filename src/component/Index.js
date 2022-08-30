import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Qr from "./Qr";
import Algo from "./Algo";
import { useState, createContext, useContext } from "react";
import { EventContext } from "../App";
export const NameContext = createContext();


export default function Index() {
  const {currentEvent} = useContext(EventContext);



const [url, setUrl] = useState(window.location.href);
const [name, setName] = useState("John Doe");
const [companyName, setCompanyName] = useState("ARTBA");



  return (
    <Container>
      <NameContext.Provider
        value={{ companyName, name, url, setUrl, setName, setCompanyName }}
      >
        <Row className="m-2">
          <Col></Col>
        </Row>
        <Row className="">
          <Col sm={4}>
            <Qr />
          </Col>
          <Col sm={8}>
            <Algo />
          </Col>
        </Row>
      </NameContext.Provider>
    </Container>
  );
}
