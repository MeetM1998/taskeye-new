import { Field } from "formik";

const TextArea = ({ id, name, label }) => {
  return (
    <div className="mb-2 flex flex-row items-center space-x-1">
      <label className="flex text-black text-xs w-[100px]" htmlFor={id}>
        {label}:
      </label>
      <Field
        as="textarea"
        id={id}
        name={name}
        rows="3"
        className="bg-white cursor-pointer w-[210px] py-1 px-2 text-xs text-black border border-[#ccc] leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default TextArea;
