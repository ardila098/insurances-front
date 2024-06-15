import styled from "styled-components";
import { Layout, Row, Col } from "antd";

const { Footer, Content } = Layout;

const FormContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  form {
    min-width: 20rem;
    padding: 20px;
    border: 1px solid #3a5762;
    border-radius: 10px;
  }

  input {
    background-color: transparent;

    min-height: 50px;
    border-radius: 10px;
    border: 1px solid #3a5762;
    color: black;
  }
`;

const StyledLayout = styled(Col)`
  background-color: #dde6e9;
  width: 100%;
`;

const StyledHeader = styled(Row)`
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  background-color: #dde6e9;
`;

const StyleTittle = styled.h1`
  margin: 0;
  font-size: 3em;
  color: #000080;
  font-family: "Baloo Tamma 2", system-ui;
  text-align: center;
`;

const StyleSubTittle = styled.h3`
  font-size: 3em;
  color: #000080;
  font-family: "Baloo Tamma 2", system-ui;
  text-align: center;
`;

const StyledDescription = styled.p`
  margin: 0;
  font-size: 2em;
  color: #333333;

  font-family: "Baloo Tamma 2", system-ui;
  text-align: center;
`;

const StyleDescription = styled.p`
  font-size: 1.8em;
  color: #333333;
  font-family: "Baloo Tamma 2", system-ui;
  

`;

const StyledFooter = styled(Footer)`
  color: white;
  text-align: center;
  padding: 10px;
`;

const StyledContent = styled(Content)``;

const StyledSection = styled.div``;

const ContentFrontPage = styled(Col)`
  justify-content: center;
  div {
    max-width: 320px;
    margin: auto;
  justify-content: center;

  }
`;

const ContentImg = styled(Col)`
  display: flex;
  background-color: #dde6e9;
  margin: auto;
  justify-content: center;
  img {
    border-top: 20px solid #dde6e9;
    border-bottom: 20px solid #dde6e9;

    border-left: 20px solid #dde6e9;
    border-radius: 30%;
    max-width: 90%;
    height: auto;
    border: none;
  }
`;

export {
  FormContainer,
  StyledLayout,
  StyledHeader,
  StyledFooter,
  StyledContent,
  StyledSection,
  StyleTittle,
  StyleDescription,
  ContentImg,
  ContentFrontPage,
  StyleSubTittle,
  StyledDescription,
};
