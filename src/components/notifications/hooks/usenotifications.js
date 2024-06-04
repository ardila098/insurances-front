import { notification, Modal } from "antd";
import { useCallback } from "react";

export const useNotifications = () => {
  const getNotificationData = useCallback((title, description) => {
    return {
      message: title,
      description: description,
    };
  }, []);

  const showSuccessNotification = useCallback(
    ({ title, description }) => {
      notification.success(getNotificationData(title, description));
    },
    [getNotificationData]
  );

  const showErrorNotification = useCallback(
    ({ title, description }) => {
      notification.error(getNotificationData(title, description));
    },
    [getNotificationData]
  );

  const showConfirmNotification = useCallback(
    ({
      title,
      content,
      onOk,
      onCancel,
      cancelText = "cancel",
      okText = "ok",
    }) => {
      Modal.confirm({
        title: title,
        content: content,
        onOk,
        onCancel,
        cancelText: cancelText,
        okText: okText,
      });
    },
    []
  );

  

  return {
    showSuccessNotification,
    showErrorNotification,
    showConfirmNotification,
  };
};
