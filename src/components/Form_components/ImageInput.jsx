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
    <div className="flex flex-col gap-3 w-full max-w-md">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-mediumOrange file:text-white hover:file:opacity-90"
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
