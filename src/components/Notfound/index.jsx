import { Result } from "antd";

const Notfound = () => {
  // const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      // extra={
      //   <Button type="primary" onClick={() => navigate("/")}>
      //     Back Home
      //   </Button>
      // }
    />
  );
};

export default Notfound;
