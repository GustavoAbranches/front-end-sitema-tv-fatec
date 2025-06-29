import { useState } from "react";

const ImageUploader = ({ onImageSelect }) => {
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setPreviewUrl(URL.createObjectURL(file));
      onImageSelect(file);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <input type="file" accept="image/*" onChange={handleImageChange} />

      {previewUrl && (
        <img
          src={previewUrl}
          alt="Preview"
          className="w-64 h-auto border rounded"
        />
      )}
    </div>
  );
};

export default ImageUploader;
