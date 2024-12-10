import { notification } from "antd";

export const showError = (message: string, description: string) => {
  notification.error({
    message,
    description: description,
  });
};

export const showSuccess = (message: string, description: string) => {
  notification.success({
    message,
    description: description,
  });
};
