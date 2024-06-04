import React from "react";
import { Row, Col } from "antd";
import FormInsurance from "./formClients/FormInsurance";
import { StyledLayout } from "./style";
import HeaderInsurance from "./HeaderInsurance";
import InsuranceServices from "./insuranceServices/InsuranceServices";
import About from "./about/About";

const Insurance = ({ selectedKeys }) => {
  const servicesRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const formRef = React.useRef(null);

  React.useEffect(() => {
    if (selectedKeys.includes("1")) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (selectedKeys.includes("2")) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (selectedKeys.includes("3")) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedKeys]);

  return (
    <StyledLayout>
      <Row>
        <Col xs={24}>
          <Row>
            <HeaderInsurance />
          </Row>
          <Row>
            <Col xs={24} ref={servicesRef}>
              <InsuranceServices />
            </Col>
          </Row>
          <Row>
            <Col xs={24} ref={aboutRef}>
              <About />
            </Col>
          </Row>
          <Row>
            <Col xs={24} ref={formRef}>
              <FormInsurance />
            </Col>
          </Row>
        </Col>
      </Row>
    </StyledLayout>
  );
};

export default Insurance;
