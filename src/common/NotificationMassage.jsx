import { message } from "antd";

const NotificationMessage = () => {
  const showMessage = (type, content) => {
    message[type](content);
  };

  return { showMessage };
};

export default NotificationMessage;
