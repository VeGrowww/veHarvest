import "./Homepage.css";
import React from "react";
import PlantDetails from "../components/PlantDetails.jsx";

export default function Homepage() {
  return (
    <main className="main">
      <section className="plant-container">
        <PlantDetails
          title="Tomatoes"
          img="src\assets\plant-pics\tomatoes.jpg"
        />
        <PlantDetails
          title="Lettuce"
          img="src\assets\plant-pics\lettuces.jpg"
        />
        <PlantDetails title="Basil" img="src\assets\plant-pics\basil.jpg" />
      </section>
    </main>
  );
}
