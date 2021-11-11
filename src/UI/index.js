import React from "react";
import "./style.css";
import { Row,Col, Container } from "react-bootstrap";

const UI = () => {
  return (
    <Container className="top-box ">
      <Row>
        <Col>
          <Row>
            <Col>
              <h3>ABCD</h3>
              <Row className="details">
                <Col>
                  <p>Height: 6'9"</p>
                  <p>Age: 30</p>
                </Col>
                <Col>
                  <p>Wt: 250</p>
                  <p>Career: 18yrs</p>
                </Col>
                <Row>
                  <Col>
                    <h7>Salary: 2020-21</h7>
                  </Col>
                  <Col>
                    <p style={{ color: "red" }}>$71271899</p>
                  </Col>
                </Row>
              </Row>
            </Col>
            <Col></Col>
          </Row>
        </Col>

        <Col>
          <div className="vs">VS</div>
        </Col>

        <Col>
          <Row>
            <Col>
              <h3>ABCD</h3>
              <Row className="details2">
                <Col>
                  <p>Height: 6'9"</p>
                  <p>Age: 30</p>
                </Col>
                <Col>
                  <p>Wt: 250</p>
                  <p>Career: 18yrs</p>
                </Col>
                <Row>
                  <Col>
                    <h7>Salary: 2020-21</h7>
                  </Col>
                  <Col>
                    <p style={{ color: "green" }}>$71271899</p>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default UI;
