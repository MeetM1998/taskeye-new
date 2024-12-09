import { BellOutlined, CloudDownloadOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import SidebarLogo from "../../assets/ulogo.png";
import UserDropdown from "../../common/UserDropdown";
import { userItems } from "../../utility/UserItem";
import SidebarDropDown from "./SidebarDropDown";

const Sidebar = () => {
  return (
    <div className="sidebar-container h-screen w-[90px] text-white flex flex-col items-center py-4">
      <div className="mb-6 bg-black rounded-full px-2 py-6">
        <img src={SidebarLogo} alt="Logo" className="w-full h-full" />
      </div>
      <div className="flex flex-row items-center justify-center gap-5 mb-6">
        <UserDropdown userItems={userItems} />

        <Tooltip
          title="Notification"
          placement="right"
          arrow={false}
          overlayInnerStyle={{ backgroundColor: "white", color: "black" }}
        >
          <BellOutlined style={{ fontSize: "24px" }} />
        </Tooltip>
      </div>
      <div className="flex flex-col justify-between items-center h-full w-full">
        <SidebarDropDown />

        <div
          className={`cloud-download-icon cursor-pointer mt-4 w-full flex justify-center py-4`}
        >
          <Tooltip
            title="Cloud Download"
            placement="right"
            arrow={false}
            overlayInnerStyle={{ backgroundColor: "white", color: "black" }}
          >
            <CloudDownloadOutlined className="text-4xl" />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
