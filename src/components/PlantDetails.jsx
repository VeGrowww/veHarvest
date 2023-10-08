import React from "react";
import "./PlantDetails.css";

export default function PlantDetails({ title, img }) {
  function handleSubmitButton(e) {
    e.preventDefault();
  }

  return (
    <div class="product-container">
      <div class="product-info">
        <img class="product-image" src={img} alt={title} />
        <h1 class="product-title">{title}</h1>
      </div>
      <div class="upload-form">
        <form
          class="upload-form"
          action="/upload"
          method="post"
          enctype="multipart/form-data"
        >
          <input
            class="file-input"
            type="file"
            name="image"
            id="image"
            accept="image/*"
          />
          <button
            class="upload-button"
            type="submit"
            onSubmit={handleSubmitButton}
          >
            Upload Image
          </button>
        </form>
      </div>
    </div>
  );
}
