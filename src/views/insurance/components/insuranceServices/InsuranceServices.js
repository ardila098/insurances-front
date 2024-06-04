import React from "react";
import { ContentCard, ContentCards, TitleContents } from "./styled";
import { Shield } from "react-feather";

import { Col } from "antd";

const services = [
  {
    _id: 1,
    service: "Long Distance Truck Coverage",
    description:
      "Protect your commercial assets: Our insurance coverage ensures protection during long-distance trips.",
    icon: Shield,
  },
  {
    _id: 2,
    service: "Short Distance Truck Coverage",
    description:
      "Our insurance policies are specifically designed for trucking operations within a region or state.",
    icon: Shield,
  },
];

const InsuranceServices = () => {
  return (
    <>
      <Col xs={24}>
        <TitleContents>Our services</TitleContents>
      </Col>
      <Col xs={24}>
        <ContentCards>
          {services.map((service) => (
            <ContentCard key={service._id} xs={24} sm={6}>
              <h3>{service.service}</h3>
              <p>{service.description}</p>
              <service.icon size={30} color="#000080" />
            </ContentCard>
          ))}
        </ContentCards>
      </Col>
    </>
  );
};

export default InsuranceServices;
