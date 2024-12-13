import { Field } from "formik";

const Select = ({ id, name, options, label, required, error, touched }) => {
  return (
    <div className="mb-2 flex flex-row items-center space-x-1">
      <label className="flex text-black text-xs w-[100px]" htmlFor={id}>
        {label} {required && <span className="text-red-500">*</span>}:
      </label>
      <Field
        as="select"
        id={id}
        name={name}
        className="bg-white cursor-pointer w-[210px] p-1 text-xs text-black border border-[#ccc] leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">--Select--</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      {error && touched && <div className="text-red-500 text-xs">{error}</div>}
    </div>
  );
};

export default Select;
