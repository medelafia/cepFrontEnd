import { useState } from "react";

export default function CoverImageUpload({
  changeHandler,
  currentImage,
  disableButton,
}) {
  const [image, setImage] = useState(currentImage);

  return (
    <>
      <div className="my-3 d-flex justify-content-between align-items-center flex-column">
        <img
          style={{ width: "100%", height: "100px" }}
          className="rounded"
          src={image}
        />
        <input
          type="file"
          accept="image/*"
          id="carImage"
          hidden
          onChange={(e)=>{
            console.log("changed")
            const url = URL.createObjectURL(e.currentTarget.files[0])
            setImage(url)
            changeHandler(e.currentTarget.files[0])
          }}
        />
        <button
          disabled={disableButton}
          className="btn btn-dark mt-3"
          onClick={() => document.getElementById("carImage").click()}
        >
          upload car image
        </button>
      </div>
    </>
  );
}
