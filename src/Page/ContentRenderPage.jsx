import { useState } from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import NotFound from "../components/Notfound";
import Footer from "../components/Footer";

const ContentRendererPage = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedColumn, setSelectedColumn] = useState("");

  if (!data) {
    return <NotFound />;
  }

  const { title, iscustomise, overview } = data;
  const headers = overview?.overview_header || [];
  const rows = overview?.overview_data || [];

  const filteredData = rows.filter((row) =>
    row.some((cell) =>
      selectedColumn
        ? cell.key === selectedColumn &&
          cell.value.toLowerCase().includes(searchTerm.toLowerCase())
        : cell.value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col flex-1 h-full bg-white shadow-lg overflow-hidden">
      <Header title={title} data={overview} />

      <div className="flex-grow overflow-auto">
        {iscustomise ? (
          <div>Custom Content Goes Here</div>
        ) : (
          <Table data={{ headers, rows: currentData }} />
        )}
      </div>

      <Footer
        currentPage={currentPage}
        pageSize={pageSize}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        setPageSize={setPageSize}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedColumn={selectedColumn}
        setSelectedColumn={setSelectedColumn}
        startIndex={startIndex}
        endIndex={endIndex}
        filteredData={filteredData}
        data={overview}
      />
    </div>
  );
};

export default ContentRendererPage;
