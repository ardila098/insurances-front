import React from "react";
import { ContentCard, ContentCards, TitleContents } from "./styled";
import { Award, Shield } from "react-feather";

import { Col } from "antd";

const services = [
  {
    _id: 1,
    title: "Vision",
    description:
      '"To be the premier insurance agency, recognized for our unwavering commitment to exceptional customer service and competitive pricing, ensuring peace of mind and financial security for every client."',
    icon: Shield,
  },
  {
    _id: 2,
    title: "Mision ",
    description:
      "At our insurance agency, we strive to exceed expectations by providing personalized solutions tailored to each client's unique needs. We are dedicated to fostering long-lasting relationships built on trust, transparency, and reliability. By offering comprehensive coverage at competitive prices, we aim to empower our clients to face the future with confidence.",
    icon: Award,
  },
];

const About = () => {
  return (
    <>
      <Col xs={24}>
        <TitleContents>Our values</TitleContents>
      </Col>
      <Col xs={24}>
        <ContentCards>
          {services.map((service) => (
            <ContentCard key={service._id} xs={24} sm={6}>
              <h2>{service.title}</h2>
              <service.icon size={90} color="#000080" />
              <p>{service.description}</p>
            </ContentCard>
          ))}
        </ContentCards>
      </Col>
    </>
  );
};

export default About;
