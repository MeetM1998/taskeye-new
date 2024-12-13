import { Checkbox } from "antd";

const CheckboxField = ({
  options,
  label,
  required,
  defaultValue = [],
  onChange,
}) => {
  const handleChange = (checkedValues) => {
    console.log("Checked =", checkedValues);
    if (onChange) onChange(checkedValues);
  };

  return (
    <div className="mb-2 flex flex-row">
      {label && (
        <label className="flex w-[100px] text-black text-xs">
          {label} {required && <span className="text-red-500">*</span>}:
        </label>
      )}
      <div className="w-[210px]">
        <Checkbox.Group
          options={options}
          defaultValue={defaultValue}
          onChange={handleChange}
          className="flex flex-wrap "
        />
      </div>
    </div>
  );
};

export default CheckboxField;
