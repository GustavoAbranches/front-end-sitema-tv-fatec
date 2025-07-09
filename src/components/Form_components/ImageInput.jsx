import { useState } from "react";

const ImageUploader = ({ onImageSelect, disabled = false }) => {
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
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        disabled={disabled}
      />

      {previewUrl && (
        <img
          src={previewUrl}
          alt="Preview"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto border border-gray-300 rounded-md shadow"
        />
      )}
    </div>
  );
};

export default ImageUploader;
