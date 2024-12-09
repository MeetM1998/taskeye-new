import {
  FilterOutlined,
  QuestionOutlined,
  SearchOutlined,
  SettingFilled,
} from "@ant-design/icons";

const Header = ({ title, data }) => {
  const { overview_filters } = data;
  return (
    <div
      className={`table-header flex justify-between items-center text-white p-2`}
    >
      <h2 className="text-base text-title-color">{title}</h2>
      <div className="flex items-center gap-2">
        <SearchOutlined className="h-5 w-5 text-base text-white hover:text-light-white font-semibold cursor-pointer" />
        {overview_filters && (
          <FilterOutlined className="h-5 w-5 text-base text-white hover:text-light-white font-semibold cursor-pointer" />
        )}
        <SettingFilled className="h-5 w-5 text-base text-white hover:text-light-white font-semibold cursor-pointer" />
        <QuestionOutlined className="h-5 w-5 text-base text-white hover:text-light-white font-semibold cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
