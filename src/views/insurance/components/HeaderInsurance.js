import React from "react";
import { Row } from "antd";
import {
  ContentFrontPage,
  ContentImg,
  StyleDescription,
  StyleTittle,
  StyledHeader,
} from "./style";

const HeaderInsurance = () => {
  return (
    <>
      <StyledHeader>
        <ContentFrontPage xs={24} sm={14}>
          <Row>
            <StyleTittle>KOC SERVICES LLC</StyleTittle>
            <StyleDescription>
              “Believe that trust is earned with every interaction. Our
              commitment to excellence and transparency means you can always
              count on us to provide you with the protection you deserve!”
            </StyleDescription>
          </Row>
        </ContentFrontPage>
        <ContentImg xs={24} sm={10}>
          <img
            src="https://res.cloudinary.com/doe7vtjfk/image/upload/v1716344151/_30b423db-9b7a-414b-8465-0af841681852_hfqh7z.jpg"
            alt=""
          />
        </ContentImg>
      </StyledHeader>
    </>
  );
};

export default HeaderInsurance;
