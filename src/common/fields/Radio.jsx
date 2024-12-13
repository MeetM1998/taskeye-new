import { Radio } from "antd";

const RadioField = ({ options, label, required, value, onChange }) => {
  const handleChange = (e) => {
    console.log("Radio checked =", e.target.value);
    if (onChange) onChange(e.target.value);
  };

  return (
    <div className="mb-2 flex flex-row">
      {label && (
        <label className="flex w-[100px] text-black text-xs">
          {label} {required && <span className="text-red-500">*</span>}:
        </label>
      )}
      <div className="w-[210px]">
        <Radio.Group
          onChange={handleChange}
          value={value}
          className="flex flex-wrap space-y-1"
        >
          {options.map((option) => (
            <Radio key={option.value} value={option.value} className="">
              {option.label}
            </Radio>
          ))}
        </Radio.Group>
      </div>
    </div>
  );
};

export default RadioField;
