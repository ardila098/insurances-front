import styled from "styled-components";
import { Layout, Button } from "antd";

const { Header, Content } = Layout;

const StyledLayout = styled(Layout)`
  background-color: #dde6e9;
`;

const StyledHeader = styled(Header)`
  background-color: #dde6e9;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: auto;
`;

const StyledContent = styled(Content)`
  background-color: #dde6e9;

  padding: 20px;
`;

const LogoContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const StyledButton = styled(Button)`
  margin-left: auto;
  background-color: #333333;
`;

const Logo = styled.img`
  height: 18em;
  margin-right: 20px;

  @media (max-width: 768px) {
    height: 14em;
    margin: 0 auto;
    display: block;
  }
`;

export {
  Logo,
  StyledButton,
  StyledContent,
  StyledHeader,
  StyledLayout,
  LogoContainer,
};
