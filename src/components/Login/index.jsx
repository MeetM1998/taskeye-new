import { Button, Form, Input, Select } from "antd";
import Logo from "../../assets/logo.png";
import NotificationMessage from "../../common/NotificationMassage";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slice/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const notification = NotificationMessage();

  const onFinish = (values) => {
    const { username, password, role } = values;
    if (username === "admin" && password === "admin") {
      dispatch(login({ username:username, role:role, isAuthenticate:true }))
      localStorage.setItem("isAuthenticate", "true");
      localStorage.setItem("role", role);
      localStorage.setItem("loginTimestamp", Date.now());
      notification.showMessage("success", "Login Successful!");
      navigate("/");
    } else {
      localStorage.setItem("isAuthenticate", "false");
      notification.showMessage("error", "Invalid Username and Password!");
    }
  };
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-1/3 flex flex-row justify-center items-center gap-8">
        <div className="flex justify-center mb-4">
          <img src={Logo} alt="Logo" className="w-24 h-40" />
        </div>
        <div>
          <h2 className="text-3xl font-medium text-center mb-6">Sign In</h2>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="true"
            layout="vertical"
            className="w-72"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please enter your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Role"
              name="role"
              rules={[{ required: true, message: "Please choose your role!" }]}
            >
              <Select
                options={[
                  { value: "admin", label: "Admin" },
                  { value: "tester", label: "Tester" },
                ]}
              />
            </Form.Item>

            <Link href="#" className="text-blue-500 flex justify-end mb-4">
              Forgot Password?
            </Link>
            <Form.Item>
              <div className="flex justify-between">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-blue-500"
                >
                  Log in
                </Button>
                <Button type="default" htmlType="button">
                  Reset
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
