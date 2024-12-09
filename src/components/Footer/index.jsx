import {
  DownloadOutlined,
  LeftOutlined,
  PlusOutlined,
  RedoOutlined,
  RightOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const Footer = ({
  currentPage,
  pageSize,
  totalPages,
  setCurrentPage,
  setPageSize,
  searchTerm,
  setSearchTerm,
  selectedColumn,
  setSelectedColumn,
  startIndex,
  endIndex,
  filteredData,
  data,
}) => {
  const { overview_header } = data;

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="bg-white p-2 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <PlusOutlined className="h-5 w-5 text-base text-[#234282] cursor-pointer hover:text-blueberry" />
        <RedoOutlined className="h-5 w-5 text-base text-[#234282] cursor-pointer hover:text-blueberry" />
        <DownloadOutlined className="h-5 w-5 text-base text-[#234282] cursor-pointer hover:text-blueberry" />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-44 placeholder:text-black px-2 py-1 border border-silver-foil text-sm focus:outline-none focus:ring-1 focus:ring-silver-foil"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="w-44 px-2 py-1 border border-silver-foil text-sm text-black focus:outline-none"
          value={selectedColumn}
          onChange={(e) => setSelectedColumn(e.target.value)}
        >
          <option value="">All</option>
          {overview_header.map((col, index) => (
            <option key={index} value={col.key}>
              {col.lable}
            </option>
          ))}
        </select>
        <SearchOutlined className="h-4 w-4 text-table-header cursor-pointer" />
      </div>

      <div className="flex items-center gap-4">
        <select
          className="border rounded px-2 py-1 text-sm cursor-pointer"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>

        <div className="flex items-center gap-2">
          <button
            className="p-1 hover:bg-gray-100 rounded"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <LeftOutlined />
          </button>

          <select
            className="border rounded px-2 py-1 text-sm cursor-pointer"
            value={currentPage}
            onChange={(e) => setCurrentPage(Number(e.target.value))}
          >
            {pageNumbers.map((page) => (
              <option key={page} value={page}>
                {page}
              </option>
            ))}
          </select>

          <button
            className="p-1 hover:bg-gray-100 rounded"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <RightOutlined />
          </button>
          <span className="mx-2 text-sm">
            {`${startIndex + 1}-${Math.min(endIndex, filteredData.length)} (${
              filteredData.length
            })`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
