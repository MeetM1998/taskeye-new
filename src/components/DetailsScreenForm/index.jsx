import { Form, Formik } from "formik";
import {
  CheckboxField,
  DatePicker,
  DateTimePicker,
  FileUploader,
  ImagePreview,
  ImageUploader,
  PasswordField,
  RadioField,
  Select,
  SelectWithSearch,
  TextArea,
  TextField,
  TimePicker,
} from "../../common/fields";

const companyOptions = [
  { value: "Company A", label: "Company A" },
  { value: "Company B", label: "Company B" },
  { value: "Company C", label: "Company C" },
];

const options = [
  {
    label: "Pear",
    value: "Pear",
  },
  {
    label: "Orange",
    value: "Orange",
  },
];

const radioOptions = [
  { label: "Option A", value: 1 },
  { label: "Option B", value: 2 },
];

const DetailScreenForm = () => {
  const initialValues = {
    taskName: "",
    company: "",
    holidayDate: "",
    eventTime: "",
    password: "",
    estimatedTaskTime: "",
    description: "",
    selectedOption: 2,
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <Form className="bg-cultured h-full overflow-y-hidden flex justify-center pt-2">
          <div className="w-2/5 flex flex-col items-center">
            <div className="w-full flex justify-end mb-4">
              <ImagePreview />
            </div>
            <TextField
              id="taskName"
              name="taskName"
              label="Task Name"
              type={"text"}
              required
            />
            <PasswordField
              id="password"
              name="password"
              label="password"
              type={"password"}
              required
            />
            <Select
              id="company"
              name="company"
              label="Company"
              required
              options={companyOptions}
            />
            <SelectWithSearch
              id="company"
              name="company"
              label="Company"
              required
              options={companyOptions}
            />
            <DatePicker
              id="holidayDate"
              format="dd-MM-yyyy"
              label="Holiday Date"
              picker="date"
              required
            />
            <TimePicker
              id="eventTime"
              format="hh:mm A"
              label="Event Time"
              picker="time"
              required
            />
            <DateTimePicker
              id="estimatedTaskTime"
              format="dd-MM-yyyy hh:mm A"
              label="Estimated Task Time"
              showTimeSelect={true}
              required
            />
            <FileUploader
              id="pdf-text-uploader"
              label="Upload File"
              required={true}
              accept=".pdf,.txt"
            />
            <ImageUploader
              id="image-uploader"
              label="Upload Image"
              required={true}
              accept=".png,.jpg,.jpeg,.gif"
            />
            <CheckboxField
              options={options}
              label="Fruits"
              required
              defaultValue={["Pear"]}
            />
            <RadioField
              label="Select Option"
              required
              options={radioOptions}
              value={values.selectedOption}
              onChange={(val) => setFieldValue("selectedOption", val)}
            />
            <TextArea id="description" name="description" label="Description" />
            <button
              type="submit"
              className="mt-2 bg-blue-500 text-white p-2 rounded text-xs"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default DetailScreenForm;
