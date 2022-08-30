import React from 'react'
import { QRCodeCanvas } from "qrcode.react";
import html2canvas from "html2canvas";
import { Card,Col, Button, ListGroup, Row, Container } from "react-bootstrap";
import { useContext } from "react";
import {NameContext} from "./Index.js";



export default function Qr() {
  
    const { name, url, companyName } = useContext(NameContext);
    const handleDownloadImage = async () => {
      const element = document.getElementById("print"),
        canvas = await html2canvas(element),
        data = canvas.toDataURL("image/jpg", 1.0, canvas.width, canvas.height),
        link = document.createElement("a");
      link.href = data;
      link.download = name+"_badge.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    const qrcode = (
      <QRCodeCanvas
        id="qrCode"
        value={url}
        size={150}
        bgColor={"#FFFFFF"}
        level={"L"}
      />
    );
  return (
    <>
      <Container className="m-1">
        <Card>
          <Row id="print">
            <Col xl={8} sm={2} lg={2} md={2}>
              <img
                style={{ marginTop: "30px" }}
                src="./Artba-logo.png"
                width="60%"
                alt="Artba"
              />
              <h5 style={{ fontWeight: "bold", marginTop: "30px" }}>{name}</h5>{" "}
              <p style={{  marginLeft: "30px" }}>{companyName}</p>
            </Col>
            <Col xl={4} sm={3} lg={1} md={1}>
              {qrcode}
            </Col>
          </Row>
        </Card>
      </Container>
      <Row className="m-5">
        <Button variant="primary" type="button" onClick={handleDownloadImage}>
          Download
        </Button>
      </Row>
    </>
  );
}
