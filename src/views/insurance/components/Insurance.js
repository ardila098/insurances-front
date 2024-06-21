import { Row, Col } from "antd";
import FormInsurance from "./formClients/FormInsurance";
import { StyledLayout } from "./style";
import HeaderInsurance from "./HeaderInsurance";
import InsuranceServices from "./insuranceServices/InsuranceServices";
import About from "./about/About";
import { useEffect, useRef } from "react";
import { infoKocServices } from "../../../constants/kocServicesConstants";

const Insurance = ({ selectedKeys }) => {
  const companyRef = useRef();
  const servicesRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    const refsMap = {
      [infoKocServices.DESCRIPTION.id]: companyRef,
      [infoKocServices.ABOUT.id]: aboutRef,
      [infoKocServices.SERVICES.id]: servicesRef,
      [infoKocServices.CONTACT.id]: contactRef,
    };
  
    const targetRef = refsMap[selectedKeys[0]];
  
    if (targetRef && targetRef.current && selectedKeys.includes(targetRef.current.id)) {
      setTimeout(() => {
        targetRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100); 
    }
  }, [selectedKeys]);
  

  return (
    <StyledLayout>
      <Row>
        <Col xs={24}>
          <Row>
            <HeaderInsurance ref={companyRef} />
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
            <Col xs={24} ref={contactRef}>
              <FormInsurance />
            </Col>
          </Row>
        </Col>
      </Row>
    </StyledLayout>
  );
};

export default Insurance;
