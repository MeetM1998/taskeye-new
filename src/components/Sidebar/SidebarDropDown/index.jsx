import { useState } from "react";
import {
  AimOutlined,
  CopyOutlined,
  DashboardOutlined,
  PieChartOutlined,
  RightOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import SidebarMenu from "../../../utility/MenuItemsData.json";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setTitle,
  setScreenId,
} from "../../../redux/slice/titleScreen/titleScreenSlice";

const iconComponents = {
  DashboardIcon: <DashboardOutlined />,
  FileOutlined: <CopyOutlined />,
  AimOutlined: <AimOutlined />,
  AreaChartOutlined: <PieChartOutlined />,
  SettingOutlined: <SettingOutlined />,
};

const SidebarDropDown = () => {
  const dispatch = useDispatch();

  const [hoveredKeys, setHoveredKeys] = useState({});

  const handleMouseEnter = (key) => {
    setHoveredKeys((prev) => ({ ...prev, [key]: true }));
  };

  const handleMouseLeave = (key) => {
    setHoveredKeys((prev) => ({ ...prev, [key]: false }));
  };

  const handleChildClick = (label, screenId) => {
    dispatch(setTitle(label));
    dispatch(setScreenId(screenId));
    localStorage.setItem("title", label);
    localStorage.setItem("screenId", screenId);
    window.dispatchEvent(new Event("storage"));
    setHoveredKeys({});
  };

  return (
    <div className="w-[90px]">
      {SidebarMenu.sidebarSubItems.map((item, index) => (
        <div key={index} className="relative z-10">
          <div
            className={`flex flex-col justify-center items-center p-3 cursor-pointer ${
              hoveredKeys[item.key] && `sidebar-parent-item`
            }`}
            onMouseEnter={() => handleMouseEnter(item.key)}
            onMouseLeave={() => handleMouseLeave(item.key)}
          >
            <span className="text-2xl">
              {iconComponents[item.icon] || null}
            </span>
            <span className="text-xs">{item.label}</span>
          </div>

          {/* {console.log("item", item.screen_id)} */}
          {/* Child Dropdown */}
          {item.children && hoveredKeys[item.key] && (
            <div
              className="child absolute top-0 left-[90px] shadow-lg w-40 z-20"
              onMouseEnter={() => handleMouseEnter(item.key)}
              onMouseLeave={() => handleMouseLeave(item.key)}
            >
              {item.children.map((child) => (
                <div
                  key={child.key}
                  className="list relative flex items-center justify-between"
                  onMouseEnter={() => handleMouseEnter(child.key)}
                  onMouseLeave={() => handleMouseLeave(child.key)}
                >
                  <Link
                    // to={`${item.path}/${child.path}`}
                    className={`block px-4 py-2 flex-grow truncate`}
                    onClick={() =>
                      handleChildClick(child.label, child.screen_id)
                    }
                  >
                    <span className="text-white text-xs">{child.label}</span>
                  </Link>

                  {child.children && (
                    <RightOutlined className="text-white mr-1 cursor-pointer text-xs" />
                  )}

                  {/* {console.log("child", child.screen_id)} */}
                  {hoveredKeys[child.key] && child.children && (
                    <div
                      key={child.key}
                      className={`sub-child absolute top-0 left-full  shadow-lg w-40 max-h-50 overflow-y-auto z-30`}
                      onMouseEnter={() => handleMouseEnter(child.key)}
                      onMouseLeave={() => handleMouseLeave(child.key)}
                    >
                      {child.children.map((subChild) => {
                        return (
                          <Link
                            // to={`${item.path}/${child.path}/${subChild.path}`}

                            key={subChild.path}
                            className={`list block px-4 py-2 truncate`}
                            onClick={() =>
                              handleChildClick(
                                subChild.label,
                                subChild.screen_id
                              )
                            }
                          >
                            <span className="text-white text-xs">
                              {subChild.label}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SidebarDropDown;
