import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SessionExpiry from "../../common/SessionExpiry";
import MenuData from "../../utility/MenuItemsData.json";
import AdminLayout from "../AdminLayout";
import TesterLayout from "../TesterLayout";

const MainLayout = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.rootReducer.auth || {});
  const {screenId} = useSelector(state => state.rootReducer.titleScreen);

  const [localScreenId, setLocalScreenId] = useState("");

  useEffect(() => {
    if (!SessionExpiry()) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchFromLocalStorage = () => {
      const storedScreenId = localStorage.getItem("screenId");
      setLocalScreenId(storedScreenId || "");
    };

    fetchFromLocalStorage();

    const handleStorageChange = () => fetchFromLocalStorage();
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const contentData = screenId
    ? MenuData.screen_data[screenId]
    : MenuData.screen_data[localScreenId];

    console.log("contentData", contentData)

  const role = user ? user.role : localStorage.getItem("role");

  switch (role) {
    case "admin":
      return <AdminLayout data={contentData} />;
    case "tester":
      return <TesterLayout data={contentData} />;
    default:
      return ;
  }
};

export default MainLayout;
