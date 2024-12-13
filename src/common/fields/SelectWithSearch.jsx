import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Empty } from "antd";
import { Field } from "formik";
import { useEffect, useRef, useState } from "react";

const SelectWithSearch = ({ id, label, required, options, name }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close dropdown
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="mb-2 flex flex-row items-center space-x-1 relative">
      {/* Label */}
      <label className="block text-xs text-black mb-1 w-[100px]" htmlFor={id}>
        {label} {required && <span className="text-red-500">*</span>} :
      </label>

      {/* Dropdown Field */}
      <Field name={name}>
        {({ form }) => (
          <div className="relative w-[210px]" ref={dropdownRef}>
            {/* Dropdown trigger */}
            <div
              className="bg-white flex items-center justify-between border border-chinese-silver p-1 text-xs text-black cursor-pointer focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>{form.values[name] || "--Select--"}</span>
              <span>
                <DownOutlined className="font-medium text-xs" />
              </span>
            </div>

            {isOpen && (
              <div className="absolute top-full left-0 w-full bg-white border border-chinese-silver shadow-md z-10 max-h-[160px]">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-[200px] p-1 m-1 text-xs border border-chinese-silver focus:outline-none"
                  />
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <SearchOutlined />
                  </span>
                </div>

                {filteredOptions.length > 0 ? (
                  filteredOptions.map((option, index) => (
                    <div
                      key={index}
                      className="p-1 m-1 text-xs hover:bg-cerulean-blue hover:text-white cursor-pointer overflow-y-auto rounded"
                      onClick={() => {
                        form.setFieldValue(name, option.value);
                        setIsOpen(false);
                        setSearchTerm("");
                      }}
                    >
                      {option.label}
                    </div>
                  ))
                ) : (
                  <div className="p-2 text-xs">
                    <Empty
                      description="No data found"
                      image={Empty.PRESENTED_IMAGE_SIMPLE}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </Field>
    </div>
  );
};

export default SelectWithSearch;
