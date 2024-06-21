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
import { infoKocServices } from "../../constants/kocServicesConstants";

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
          {Object.keys(infoKocServices).map((key) => {
            const section = infoKocServices[key];
            return <Menu.Item key={section.id}>{section.name}</Menu.Item>;
          })}
        </Menu>
      </Drawer>
    </StyledLayout>
  );
};

export default Navbar;
