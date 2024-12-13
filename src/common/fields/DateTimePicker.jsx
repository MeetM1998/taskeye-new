import { useState, useRef, useEffect } from "react";

const DateTimePicker = ({ id, label, required, onChange }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState({ hour: 12, minute: 0 });
  const pickerRef = useRef(null);

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const today = new Date();

  const [currentDate, setCurrentDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
    date: today.getDate(),
  });

  const handleDateClick = (date) => {
    setSelectedDate(new Date(currentDate.year, currentDate.month, date));
  };

  const handleTimeChange = (type, value) => {
    setSelectedTime((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleClickOutside = (event) => {
    if (pickerRef.current && !pickerRef.current.contains(event.target)) {
      setShowPicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative mb-2 flex flex-row items-center space-x-1">
      <label htmlFor={id} className="flex text-black text-xs w-[100px]">
        {label} {required && <span className="text-red-500">*</span>}:
      </label>
      <input
        id={id}
        type="text"
        readOnly
        value={
          selectedDate
            ? `${selectedDate.toLocaleDateString()} ${(
                selectedTime.hour % 12 || 12
              )
                .toString()
                .padStart(2, "0")}:${selectedTime.minute
                .toString()
                .padStart(2, "0")} ${selectedTime.hour >= 12 ? "PM" : "AM"}`
            : ""
        }
        onClick={() => setShowPicker(true)}
        className="w-[210px] text-xs border border-chinese-silver p-1 focus:ring-1 focus:ring-persian-blue cursor-pointer"
        placeholder="Select Date & Time"
      />
      {showPicker && (
        <div
          ref={pickerRef}
          className="absolute top-[100%] left-[100px] mt-1 w-[210px] p-2 bg-white border border-chinese-silver shadow-lg z-10"
        >
          {/* Calendar */}
          <div className="mb-2">
            <div className="flex justify-between items-center mb-2">
              <button
                onClick={() =>
                  setCurrentDate((prev) => ({
                    ...prev,
                    month: prev.month === 0 ? 11 : prev.month - 1,
                    year: prev.month === 0 ? prev.year - 1 : prev.year,
                  }))
                }
                className="text-xs font-bold text-black"
              >
                &lt;
              </button>
              <span className="text-xs font-bold">
                {new Date(currentDate.year, currentDate.month).toLocaleString(
                  "default",
                  { month: "long", year: "numeric" }
                )}
              </span>
              <button
                onClick={() =>
                  setCurrentDate((prev) => ({
                    ...prev,
                    month: prev.month === 11 ? 0 : prev.month + 1,
                    year: prev.month === 11 ? prev.year + 1 : prev.year,
                  }))
                }
                className="text-xs font-bold text-black"
              >
                &gt;
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <div key={day} className="font-bold text-black">
                  {day}
                </div>
              ))}
              {Array.from(
                {
                  length: new Date(
                    currentDate.year,
                    currentDate.month,
                    1
                  ).getDay(),
                },
                (_, i) => (
                  <div key={i} />
                )
              )}
              {Array.from(
                { length: daysInMonth(currentDate.month, currentDate.year) },
                (_, i) => (
                  <div
                    key={i}
                    onClick={() => handleDateClick(i + 1)}
                    className={`p-1 cursor-pointer rounded ${
                      selectedDate &&
                      selectedDate.getDate() === i + 1 &&
                      selectedDate.getMonth() === currentDate.month
                        ? "bg-persian-blue text-white"
                        : "hover:bg-chinese-silver"
                    }`}
                  >
                    {i + 1}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Time Display */}
          <div className="flex items-center mb-2  text-sm">
            <span className="text-xs mr-2 w-11">Time :</span>
            <div>
              {`${
                selectedTime.hour > 12
                  ? selectedTime.hour - 12
                  : selectedTime.hour || 12
              }`
                .toString()
                .padStart(2, "0")}
              :{selectedTime.minute.toString().padStart(2, "0")}{" "}
              <span className="text-xs">
                {selectedTime.hour >= 12 ? "PM" : "AM"}
              </span>
            </div>
          </div>

          {/* Time Select */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-xs mr-2 w-11">Hour :</span>
              <input
                type="range"
                min="0"
                max="23"
                value={selectedTime.hour}
                onChange={(e) =>
                  handleTimeChange("hour", Number(e.target.value))
                }
                className="w-[135px]"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
              <span className="text-xs mr-2">Minute :</span>
              <input
                type="range"
                min="0"
                max="59"
                value={selectedTime.minute}
                onChange={(e) =>
                  handleTimeChange("minute", Number(e.target.value))
                }
                className="w-[135px]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateTimePicker;
