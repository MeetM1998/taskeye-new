const ImageAndFileUploader = ({ id, label, accept, onChange }) => {
  return (
    <div className="mb-2 flex flex-row items-center space-x-1">
      <label htmlFor={id} className="flex text-black text-xs w-[100px]">
        {label} :
      </label>
      <input
        id={id}
        type="file"
        accept={accept}
        onChange={(e) => onChange(e.target.files[0])}
        className="text-xs text-black w-[210px]"
      />
    </div>
  );
};

export default ImageAndFileUploader;
