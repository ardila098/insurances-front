import React, { useState } from "react";
import Insurance from "./components/Insurance";
import Navbar from "../../components/navbar/Navbar";

const InsurancePage = () => {
  const [selectedKeys, setSelectedKeys] = useState(["1"]);

  const handleMenuSelect = (e) => {
    setSelectedKeys(e.key);
  };

  return (
    <>
      <Navbar onSelect={handleMenuSelect} />
      <Insurance selectedKeys={selectedKeys} />
    </>
  );
};

export default InsurancePage;
