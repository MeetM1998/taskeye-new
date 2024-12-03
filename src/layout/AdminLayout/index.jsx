import { Outlet } from "react-router-dom";
import ContentRendererPage from "../../Page/ContentRenderPage";
import Sidebar from "../../components/Sidebar";

const AdminLayout = ({ data }) => {
  // console.log("data", data);
  return (
    <div className="admin-layout flex flex-row h-screen">
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

export default AdminLayout;
