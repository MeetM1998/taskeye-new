import { UserOutlined } from "@ant-design/icons";
import  { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slice/auth/authSlice";

const UserDropdown = ({ userItems }) => {
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleMenuClick = (path) => {
    if (path === "logout") {
      dispatch(logout({ isAuthenticate: false }));
      localStorage.setItem("isAuthenticate", "false");
      localStorage.removeItem("role");
      localStorage.removeItem("title");
      navigate("/login");
    } else {
      navigate(path);
    }
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderMenuItems = (items) => {
    return items.map((item) => (
      <div key={item.key} className="group relative text-xs font-medium border-b">
        {item.children ? (
          <div className="flex items-center justify-between cursor-pointer px-4 py-2 hover:rounded-md hover:bg-gray-100">
            <span>{item.label}</span>
            <span className="ml-2 text-xs font-bold">&gt;</span>
            <div className="absolute w-36 max-h-40 overflow-y-auto left-full top-0 hidden border-b border-gray-100 rounded-md group-hover:block bg-white shadow-lg z-20">
              {renderMenuItems(item.children)}
            </div>
          </div>
        ) : (
          <div
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleMenuClick(item.path)}
          >
            {item.label}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <div className="flex items-center justify-center cursor-pointer" onClick={toggleDropdown}>
        <UserOutlined style={{ fontSize: "24px" }} />
      </div>

      {isOpen && (
        <div className="absolute left-2 mt-2 w-36 bg-white text-[#444] shadow-lg border-b border-gray-100 rounded-md origin-top-right">
          {renderMenuItems(userItems)}
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
