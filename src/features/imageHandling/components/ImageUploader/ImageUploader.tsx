import { useState } from "react";
import { useUploadImage } from "../../hooks/imageHooks";

export type Image = File | undefined | null;

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState<Image>(null);
  const uploadImage = useUploadImage();

  return (
    <div>
      <h1>Upload and Display Image usign React Hook's</h1>

      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

      <br />
      <br />

      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files?.[0]);
          setSelectedImage(event.target?.files?.[0]);
        }}
      />
      <button onClick={() => uploadImage(selectedImage)}>Upload</button>
    </div>
  );
};

export default UploadAndDisplayImage;
