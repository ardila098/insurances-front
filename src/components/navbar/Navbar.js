import { useState } from "react";
import { Menu, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import {
  Logo,
  LogoContainer,
  StyledButton,
  StyledContent,
  StyledHeader,
  StyledLayout,
} from "./Styled";

const Navbar = ({ selectedKeys, onSelect }) => {
  const [visible, setVisible] = useState(false);

  const onChangeSelect = (data) => {
    onSelect(data);
    setVisible(false);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <StyledLayout>
      <StyledHeader>
        <LogoContainer>
          <Logo src="https://res.cloudinary.com/doe7vtjfk/image/upload/v1712695007/Removal-446_f8bfdx.png" />
        </LogoContainer>
        <StyledButton
          type="primary"
          onClick={showDrawer}
          icon={<MenuOutlined />}
        ></StyledButton>
      </StyledHeader>
      <StyledContent></StyledContent>
      <Drawer
        title="Menú"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Menu
          mode="inline"
          selectedKeys={selectedKeys}
          onSelect={onChangeSelect}
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1" onCl>
            About
          </Menu.Item>
          <Menu.Item key="2">Our Services</Menu.Item>
          <Menu.Item key="3">Our Values</Menu.Item>
          <Menu.Item key="3">Contact Us</Menu.Item>
        </Menu>
      </Drawer>
    </StyledLayout>
  );
};

export default Navbar;
