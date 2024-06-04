import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { FormContainer, StyleSubTittle, StyledDescription } from "../style";
import useCaptureClients from "./hooks/useCaptureClients";
import { useNotifications } from "../../../../components/notifications/hooks/usenotifications";

const FormInsurance = () => {
  const [form] = Form.useForm();
  const { addEmailClient } = useCaptureClients();
  const { showSuccessNotification } = useNotifications();

  const onFinish = (values) => {
    showSuccessNotification({
      title: "Success",
      description: "Form submitted successfully",
    });
    addEmailClient(values);
    form.resetFields();
  };

  return (
    <>
      <Col xs={24}>
        <StyleSubTittle>Contact us</StyleSubTittle>
        <StyledDescription>
          “Competitive rates for your fleet. Get a quote now!”{" "}
        </StyledDescription>
      </Col>
      <FormContainer>
        <Form
          form={form}
          name="formulario-seguros"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="dot"
            rules={[{ required: true, message: "Please enter DOT!" }]}
          >
            <Input placeholder="DOT" />
          </Form.Item>

          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input placeholder="Name" />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[{ required: true, message: "Please enter your phone!" }]}
          >
            <Input placeholder="Phone" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Row justify="center">
            <Form.Item>
              <Button
                htmlType="submit"
                style={{ background: "#cdd8da", color: "#000080" }}
              >
                Submit
              </Button>
            </Form.Item>
          </Row>
        </Form>
      </FormContainer>
    </>
  );
};

export default FormInsurance;
