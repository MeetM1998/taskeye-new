import { DeleteOutlined, EyeOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Image, Upload } from "antd";
import { useState } from "react";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const ImagePreview = () => {
  const [fileList, setFileList] = useState([]);
  const [previewImage, setPreviewImage] = useState("");
  const [previewOpen, setPreviewOpen] = useState(false);

  const handleChange = ({ fileList: newFileList }) => {
    if (newFileList.length > 0) {
      const file = newFileList[0];
      if (!file.url && !file.preview) {
        getBase64(file.originFileObj, (imageUrl) => {
          setPreviewImage(imageUrl);
        });
      } else {
        setPreviewImage(file.url || file.preview);
      }
    } else {
      setPreviewImage("");
    }
    setFileList(newFileList);
  };

  const handleRemove = () => {
    setFileList([]);
    setPreviewImage("");
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div className="mb-2 flex flex-row w-full justify-end">
      {previewImage ? (
        <div
          className="relative"
          onMouseEnter={(e) =>
            (e.currentTarget.querySelector(".hover-overlay").style.opacity = 1)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.querySelector(".hover-overlay").style.opacity = 0)
          }
        >
          <Image
            src={previewImage}
            width={100}
            height={100}
            className="object-cover rounded cursor-pointer"
            preview={{
              visible: previewOpen,
              onVisibleChange: (visible) => setPreviewOpen(visible),
            }}
            onClick={() => setPreviewOpen(true)}
          />

          {/* Hover Overlay */}
          <div
            className="hover-overlay absolute top-0 left-0 w-full h-full text-white flex items-center justify-evenly opacity-0 rounded"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              transition: "opacity 0.3s",
            }}
          >
            <Button
              type="text"
              icon={<EyeOutlined />}
              style={{ color: "#fff" }}
              onClick={() => setPreviewOpen(true)}
            />

            <Button
              type="text"
              icon={<DeleteOutlined />}
              style={{ color: "#fff" }}
              onClick={handleRemove}
            />
          </div>
        </div>
      ) : (
        <Upload
          listType="picture-card"
          fileList={fileList}
          onChange={handleChange}
          showUploadList={false}
          beforeUpload={() => false}
        >
          {!previewImage ? uploadButton : null}
        </Upload>
      )}
    </div>
  );
};

export default ImagePreview;
