import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import ContentRendererPage from "../../page/ContentRenderPage";

const TesterLayout = ({  data }) => {
  return (
    <div className="tester-layout flex flex-row h-screen">
      <Sidebar />
      <div className="flex-1 p-[10px] bg-title-color overflow-y-auto">
        <div className="w-full bg-[#F5F5F5] shadow-lg flex flex-col h-full">
          <Outlet />
          <ContentRendererPage data={data} />
        </div>
      </div>
    </div>
  );
};

export default TesterLayout;
