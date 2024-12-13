import { Field } from "formik";
import { useState, useEffect } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const TextField = ({ id, name, label, type, required, error, touched }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [hideTimer, setHideTimer] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);

    if (!showPassword) {
      const timer = setTimeout(() => {
        setShowPassword(false);
      }, 5000);
      setHideTimer(timer);
    } else {
      clearTimeout(hideTimer);
    }
  };

  useEffect(() => {
    return () => {
      if (hideTimer) {
        clearTimeout(hideTimer);
      }
    };
  }, [hideTimer]);

  return (
    <div className="mb-2 flex flex-row items-center space-x-1">
      <label className="flex text-black text-xs w-[100px]" htmlFor={id}>
        {label} {required && <span className="text-red-500">*</span>}:
      </label>
      {type === "password" ? (
        <div className="relative w-[210px]">
          <Field
            type={showPassword ? "text" : "password"}
            id={id}
            name={name}
            autoComplete="off"
            className="bg-white w-full p-1 text-xs text-black border border-chinese-silver leading-tight focus:outline-none focus:shadow-outline pr-8"
          />
          <span
            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-black cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
          </span>
          {error && touched && (
            <div className="text-red-500 text-xs mt-1">{error}</div>
          )}
        </div>
      ) : (
        <div className="flex flex-col">
          <Field
            type={type}
            id={id}
            name={name}
            autoComplete="off"
            className="bg-white cursor-pointer w-[210px] p-1 text-xs text-black border border-chinese-silver leading-tight focus:outline-none focus:shadow-outline"
          />
          {error && touched && (
            <div className="text-red-500 text-xs">{error}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default TextField;
