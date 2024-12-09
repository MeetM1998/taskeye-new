import { Outlet } from "react-router-dom";
import ContentRendererPage from "../../Page/ContentRenderPage";
import Sidebar from "../../components/Sidebar";

const AdminLayout = ({ data }) => {
  return (
    <div className="admin-layout flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 p-[10px] bg-anti-flash-white flex flex-col bg-title-color">
        <div className="w-full h-full bg-cultured shadow-lg flex flex-col overflow-hidden">
          <Outlet />
          <ContentRendererPage data={data} />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
